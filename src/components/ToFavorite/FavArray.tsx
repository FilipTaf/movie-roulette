import React, { useMemo, useState } from "react";
import Table from "react-bootstrap/Table";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { delFavMovie } from "../../store/movieReducer";
import { Button, Container } from "react-bootstrap";
import "../main.scss";
//@ts-ignore
import styles from "./table.module.scss";
import * as Icon from "react-bootstrap-icons";
import InfoModal from "../InfoModal";

const MovieList = ({ query = "", isSearchClicked }) => {
  const movies = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();
  const [sortAZ, setSortAZ] = useState(true);
  const handleToggle = (title) => {
    dispatch(delFavMovie(title));
  };
  const [show, setShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(
    undefined
  );
  interface Movie {
    id: number;
    title: string;
    description: string;
    director: string;
    release: string;
    genre: string;
    rating: string;
    favorite: boolean;
    img: string;
  }
  const favMovie = movies.filter((movie) => movie.favorite === true);
  const filteredMovies = useMemo(() => {
    if (!isSearchClicked || !query) {
      return favMovie;
    }
    return (favMovie || []).filter(
      (movie) =>
        movie.genre && movie.genre.toLowerCase().includes(query.toLowerCase())
    );
  }, [favMovie, query, isSearchClicked]);

  const handleSort = () => {
    setSortAZ((prev) => !prev);
  };

  const moviesToDisplay = useMemo(() => {
    let movies = filteredMovies.slice(0, 30).reverse();
    movies.sort((a, b) => {
      const titleA = a.title.replace(/\s+/g, "").toLowerCase();
      const titleB = b.title.replace(/\s+/g, "").toLowerCase();
      return sortAZ
        ? titleA.localeCompare(titleB)
        : titleB.localeCompare(titleA);
    });
    return movies;
  }, [filteredMovies, sortAZ]);

  const movieIndex = movies.findIndex(
    (movie) => movie.title === selectedMovie?.title
  );

  const Show = (movie) => {
    setSelectedMovie(movie);
    setShow(true);
  };

  return (
    <>
      <Container>
        <br />
        <Button onClick={handleSort}>
          <Icon.Filter />
        </Button>
        <br />
        <br />
        {moviesToDisplay.map((movie, index) => (
          <div className={styles.main} key={index} onClick={() => Show(movie)}>
            <div className={styles.image}>
              <img className={styles.imga} src={movie.img}></img>
            </div>

            <div className={styles.title}>
              <h5>{movie.title}</h5>
            </div>

            <div className={styles.rate}>
              <Icon.StarFill /> {movie.rating}
            </div>

            <div>
              <div className={styles.genre}>
                <span className={styles.mutedText}>genre </span>
                {movie.genre}
              </div>
              <div className={styles.director}>
                <span className={styles.mutedText}>director </span>
                {movie.director}
              </div>
            </div>
          </div>
        ))}
      </Container>
      <InfoModal
        isShow={show}
        movieId={movieIndex}
        onHide={() => setShow(false)}
        table={false}
      ></InfoModal>
    </>
  );
};

export default MovieList;
