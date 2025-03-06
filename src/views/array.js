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
    <div className="block mt-3">
      <h2>Lista filmów z wybraanego gatunku</h2>
      <Table>
        <thead>
          <tr>
            <th>Tytuł</th>
            <th>Gatunek</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MovieList;
