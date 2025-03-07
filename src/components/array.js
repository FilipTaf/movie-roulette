import React, { useEffect, useMemo } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

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

  console.log(moviesToDisplay);
  return (
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
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.director}</td>
            <td>{movie.rating}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MovieList;
