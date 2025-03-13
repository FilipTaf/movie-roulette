import React, { useMemo, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { addFavMovie } from "../store/movieReducer";
import { Modal, Button } from "react-bootstrap";
import { addMovie } from "../store/drawnReducer";

const MovieList = ({ query = "", isSearchClicked }) => {
  const movieList = useSelector((state) => state.drawns.drawns);
  const dispatch = useDispatch();
  const [sortAZ, setSortAZ] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleToggle = (title) => {
    console.log("Kliknieto przycisk dla ", title);
    dispatch(addFavMovie(title));
  };

  const handleSort = () => {
    setSortAZ((prev) => !prev);
  };

  const filteredMovies = useMemo(() => {
    if (!isSearchClicked || !query) {
      return movieList;
    }
    return (movieList || []).filter(
      (movie) =>
        movie.genre && movie.genre.toLowerCase().includes(query.toLowerCase())
    );
  }, [movieList, query, isSearchClicked]);

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
            <th onClick={handleSort}>Tytuł</th>
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
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        centered
        onHide={Close}
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie ? selectedMovie.title : ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMovie ? (
            <>
              Reżyser : {selectedMovie.director}
              <br />
              Opis : {selectedMovie.description}
              <br />
              Gatunek : {selectedMovie.genre}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={Close}>
            Zamknij
          </Button>
          <Button
            variant="primary"
            onClick={() => handleToggle(selectedMovie?.title)}
          >
            Dodaj do ulubionych
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieList;
