import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

const MovieList = () => {
  const movieList = useSelector((state) => state.movies);
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
          {movieList.map((movie) => (
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
