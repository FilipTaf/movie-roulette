import React, { useMemo, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { delFavMovie } from "../store/movieReducer";
import { Button } from "react-bootstrap";
import "./Main.css";
import * as Icon from "react-bootstrap-icons";

const MovieList = ({ query = "", isSearchClicked }) => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [sortAZ, setSortAZ] = useState(true);
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
            <tr class="table-active">
              <th onClick={handleSort}>Title</th>
              <th>Genre</th>
              <th>Usuń z ulubionych</th>
            </tr>
          </thead>
          <tbody class="table-group-divider table-divider-color">
            {moviesToDisplay.map((movie, index) => (
              <tr key={index}>
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
      </div>
    </>
  );
};

export default MovieList;
