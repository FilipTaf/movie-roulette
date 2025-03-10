import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

const MovieList = () => {
  const movies = useSelector((state) => state.movies);
  const favMovie = movies.filter((movie) => movie.favorite === true);
  return (
    <>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {favMovie.map((movie) => (
            <tr>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default MovieList;
