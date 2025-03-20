import React, { useMemo, useState } from "react";
import Table from "react-bootstrap/Table";
import { useAppSelector } from "../../store/hooks";
import InfoModal from "../InfoModal";

const MovieList = ({ query = "", isSearchClicked }) => {
  let drawnList = useAppSelector((state) => state.drawns.drawns);
  const movieList = useAppSelector((state) => state.movies);
  const [sortAZ, setSortAZ] = useState(false);

  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(
    undefined
  );
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

  const handleSort = () => {
    setSortAZ((prev) => !prev);
  };

  const filteredMovies = useMemo(() => {
    if (!isSearchClicked || !query) {
      return drawnList;
    }
    return (drawnList || []).filter(
      (movie: Movie) =>
        movie.genre && movie.genre.toLowerCase().includes(query.toLowerCase())
    );
  }, [drawnList, query, isSearchClicked]);

  const moviesToDisplay = useMemo(() => {
    let movies = filteredMovies.slice(0, 30).reverse();
    movies.sort((a: Movie, b: Movie) => {
      const titleA = a.title.replace(/\s+/g, "").toLowerCase();
      const titleB = b.title.replace(/\s+/g, "").toLowerCase();
      return sortAZ
        ? titleA.localeCompare(titleB)
        : titleB.localeCompare(titleA);
    });

    return movies;
  }, [filteredMovies, sortAZ]);

  const Show = (movie) => {
    setSelectedMovie(movie);
    setShow(true);
  };
  const movieIndex = movieList.findIndex(
    (movie) => movie.title === selectedMovie?.title
  );
  return (
    <>
      <div className="table-container">
        <Table bordered hover responsive>
          <thead>
            <tr className="table-active">
              <th onClick={handleSort}>Title</th>
              <th>Genre</th>
              <th>Director</th>
              <th>Rating</th>
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
      <InfoModal
        isShow={show}
        movieId={movieIndex}
        onHide={() => setShow(false)}
        table={false}
      ></InfoModal>
    </>
  );
};

export default MovieList;
