import React, { useMemo, useState } from "react";
import Table from "react-bootstrap/Table";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { addFavMovie } from "../store/movieReducer";
import { Modal, Button } from "react-bootstrap";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BookmarkHeartFill, BookmarkHeart } from "react-bootstrap-icons";

const MovieList = ({ query = "", isSearchClicked }) => {
  let movieList = useAppSelector((state) => state.drawns.drawns);
  const dispatch = useAppDispatch();
  const [sortAZ, setSortAZ] = useState(false);
  const [sortGenre, setSortGenre] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(
    undefined
  );
  const [clicked, setClicked] = useState(false);
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
  }

  const handleToggle = (title: string) => {
    dispatch(addFavMovie(title));
    if (selectedMovie) {
      setClicked(!selectedMovie.favorite);
    }
  };

  const filteredMovies = useMemo(() => {
    if (!isSearchClicked || !query) {
      return movieList;
    }
    return (movieList || []).filter(
      (movie: Movie) =>
        movie.genre && movie.genre.toLowerCase().includes(query.toLowerCase())
    );
  }, [movieList, query, isSearchClicked]);

  const moviesToDisplay = useMemo(() => {
    let movies = filteredMovies.slice(0, 30).reverse();
    if (sortAZ) {
      movies = [...movies].sort((a: Movie, b: Movie) =>
        a.title.localeCompare(b.title)
      );
    }
    if (sortGenre) {
      movies = [...movies].sort((a: Movie, b: Movie) =>
        a.genre.localeCompare(b.genre)
      );
    }

    return movies;
  }, [filteredMovies, sortAZ, sortGenre, handleToggle]);

  const handleSortTitle = () => {
    setSortAZ(!sortAZ);
    setSortGenre(false);
  };

  const handleSortGenre = () => {
    setSortGenre(!sortGenre);
    setSortAZ(false);
  };

  const Close = () => setShow(false);

  const Show = (movie) => {
    setSelectedMovie(movie);
    setShow(true);
    console.log("favorite on load", movie);

    console.log("list", movieList[movie.id]);
  };
  return (
    <>
      <div className="table-container">
        <Table
          bordered
          hover
          responsive
          className="custom-dark-table table-dark"
        >
          <thead>
            <tr>
              <th onClick={handleSortTitle}>Tytuł</th>
              <th onClick={handleSortGenre}>Gatunek</th>
              <th>Reżyser</th>
              <th>Ocena</th>
            </tr>
          </thead>
          <tbody>
            {moviesToDisplay.map((movie: Movie, index) => (
              <tr key={index} onClick={() => Show(movie)}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.director}</td>
                <td>{movie.rating}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Modal show={show} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie ? selectedMovie.title : ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Reżyser : {selectedMovie ? selectedMovie.director : ""}
          <br />
          Opis : {selectedMovie ? selectedMovie.description : ""}
          <br />
          Gatunek : {selectedMovie ? selectedMovie.genre : ""}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              Close();
            }}
          >
            Zamknij
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              if (selectedMovie) {
                handleToggle(selectedMovie.title);
              }
            }}
          >
            Dodaj do ulubionych
            {clicked ? <BookmarkHeartFill /> : <BookmarkHeart />}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieList;
