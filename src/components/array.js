import React from "react";
import { Container, Row, Col } from "react-bootstrap";

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
    <div>
      {movies.map((movie, index) => (
        <div
          key={index}
          className="Movie"
          style={{
            padding: "10px",
            margin: "5px",
            border: "1px solid #ccc",
            backgroundColor: "#f9f9f9",
          }}
        >
          {movie.title},{movie.genre}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
