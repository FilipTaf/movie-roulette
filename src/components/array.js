import React, { useEffect, useMemo, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import "./style.css";

const MovieList = ({ query = "", isSearchClicked }) => {
  const movieList = useSelector((state) => state.movies);

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
          <p>Gatunek : {selectedMovie ? selectedMovie.genre : ""} </p>
          <p>Reżyser : {selectedMovie ? selectedMovie.director : ""} </p>
          <p>Opis : {selectedMovie ? selectedMovie.description : ""}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={Close}>
            Zamknij
          </Button>
          <Button variant="primary">Dodaj do ulubionych</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieList;
