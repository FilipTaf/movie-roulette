import React from "react";
import Table from "react-bootstrap/Table";

const MovieList = () => {
  const movies = [
    { title: "Furia", genre: "Wojna" },
    { title: "Szeregowiec Ryan", genre: "Wojna" },
    { title: "The Ring", genre: "Horror" },
    { title: "Matrix", genre: "Akcja" },
    { title: "Forrest Gump", genre: "Dramat" },
    { title: "Gladiator", genre: "Dramat" },
    { title: "Druga wojna światowa w kolorze", genre: "Historia" },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      genre: "Sci-Fi",
    },
  ];
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
          {movies.map((movie) => (
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
