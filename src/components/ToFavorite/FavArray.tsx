import React, { useMemo, useState } from "react";
import Table from "react-bootstrap/Table";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { delFavMovie } from "../../store/movieReducer";
import { Button, Container } from "react-bootstrap";
import "../main.scss";
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
      <Container className={styles.tableContainer}>
        <Table bordered hover responsive>
          <thead>
            <tr className="table-active">
              <th onClick={handleSort}>Title</th>
              <th>Genre</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {moviesToDisplay.map((movie, index) => (
              <tr key={index} onClick={() => Show(movie)}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>
                  {" "}
                  <Button
                    variant="danger"
                    onClick={() => handleToggle(movie.title)}
                  >
                    <Icon.Trash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
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
