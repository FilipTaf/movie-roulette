import React, { useState, useMemo } from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { delFavMovie } from "../store/movieReducer";
import { Button } from "react-bootstrap";

const MovieList = ({ query = "", isSearchClicked }) => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const handleToggle = (title) => {
    console.log("Kliknieto przycisk dla ", title);
    dispatch(delFavMovie(title));
  };

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

  const moviesToDisplay = useMemo(() => {
    let movies = filteredMovies.reverse();
    return movies;
  }, [filteredMovies]);

  return (
    <>
      <Table bordered hover className="table table-dark">
        <thead>
          <tr className="table-active">
            <th>Title</th>
            <th>Genre</th>
            <th>Usuń</th>
          </tr>
        </thead>
        <tbody className="table-group-divider table-divider-color">
          {moviesToDisplay.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>
                {" "}
                <Button
                  variant="primary"
                  onClick={() => handleToggle(movie.title)}
                >
                  Usuń z ulubionych
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default MovieList;
