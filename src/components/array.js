import React, { useMemo, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { toggleMovie } from "../store/movieReducer";
import { Modal, Button } from "react-bootstrap";

const MovieList = ({ query = "", isSearchClicked }) => {
  const movieList = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const handleToggle = (title) => {
    console.log("Kliknieto przycisk dla ", title);
    dispatch(toggleMovie(title));
  };

  const filteredMovies = useMemo(() => {
    if (!isSearchClicked || !query || !isSearchClicked != "") {
      return movieList;
    }
    return (movieList || []).filter(
      (movie) =>
        movie.genre && movie.genre.toLowerCase().includes(query.toLowerCase())
    );
  }, [movieList, query, isSearchClicked]);

  const moviesToDisplay = useMemo(
    () => filteredMovies.slice(0, 30),
    [filteredMovies]
  );
  const [show, setShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const Close = () => setShow(false);
  const Show = (movie) => {
    setSelectedMovie(movie);
    setShow(true);
  };
  return (
    <>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Tytuł</th>
            <th>Gatunek</th>
            <th>Reżyser</th>
            <th>Ocena</th>
          </tr>
        </thead>
        <tbody>
          {moviesToDisplay.map((movie, index) => (
            <tr key={index}>
              <td onClick={() => Show(movie)}>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.director}</td>
              <td>{movie.rating}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={Close} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie ? selectedMovie.title : ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Reżyser : {selectedMovie ? selectedMovie.director : ""}
          Opis : {selectedMovie ? selectedMovie.description : ""}
          Gatunek : {selectedMovie ? selectedMovie.genre : ""}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={Close}>
            Zamknij
          </Button>
          <Button
            variant="primary"
            onClick={() => handleToggle(selectedMovie.title)}
          >
            Dodaj do ulubionych
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieList;
