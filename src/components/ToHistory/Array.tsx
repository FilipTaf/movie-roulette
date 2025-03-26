import React, { useMemo, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import InfoModal from "../InfoModal";
//@ts-ignore
import styles from "../ToFavorite/table.module.scss";
import { Container, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { clearTable } from "../../store/drawnReducer";
import { useDispatch } from "react-redux";

const MovieList = ({ query = "", isSearchClicked }) => {
  let drawnList = useAppSelector((state) => state.drawns.drawns);
  const movieList = useAppSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [sortAZ, setSortAZ] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(
    undefined
  );
  const [show, setShow] = useState(false);

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

  const handleSort = () => {
    setSortAZ((prev) => !prev);
  };

  const handleClear = () => {
    dispatch(clearTable());
  };

  const filteredMovies = useMemo(() => {
    if (!isSearchClicked || !query) {
      return drawnList;
    }
    return (drawnList || []).filter(
      (movie: Movie) =>
        movie.genre && movie.genre.toLowerCase().includes(query.toLowerCase())
    );
  }, [drawnList, query, isSearchClicked]);

  const moviesToDisplay = useMemo(() => {
    let movies = filteredMovies.slice(0, 30).reverse();
    movies.sort((a: Movie, b: Movie) => {
      const titleA = a.title.replace(/\s+/g, "").toLowerCase();
      const titleB = b.title.replace(/\s+/g, "").toLowerCase();
      return sortAZ
        ? titleA.localeCompare(titleB)
        : titleB.localeCompare(titleA);
    });

    return movies;
  }, [filteredMovies, sortAZ]);

  const Show = (movie) => {
    setSelectedMovie(movie);
    setShow(true);
  };
  const movieIndex = movieList.findIndex(
    (movie) => movie.title === selectedMovie?.title
  );
  return (
    <>
      <Container>
        <br />
        <Button onClick={handleSort}>
          <Icon.Filter />
        </Button>
        <Button onClick={handleClear}>
          <Icon.Trash3Fill></Icon.Trash3Fill>
        </Button>
        <br />
        <br />
        {moviesToDisplay.map((movie: Movie, index) => (
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
