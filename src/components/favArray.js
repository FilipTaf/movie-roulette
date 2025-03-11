import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { delFavMovie } from "../store/movieReducer";
import { Button } from "react-bootstrap";

const MovieList = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const handleToggle = (title) => {
    console.log("Kliknieto przycisk dla ", title);
    dispatch(delFavMovie(title));
  };
  const favMovie = movies.filter((movie) => movie.favorite === true);
  return (
    <>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Usuń</th>
          </tr>
        </thead>
        <tbody>
          {favMovie.map((movie) => (
            <tr>
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
