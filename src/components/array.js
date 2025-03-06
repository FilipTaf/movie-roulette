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
    <div className="block" style={{ backgroundColor: "red", height: "40px" }}>
      <Container>
        <Row>
          <Col xs={2}>{movies.map((movie) => (movie.title, movie.genre))}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieList;

/*
<Container>
      <Row>
        <Col xs={2}>
          <div
            className="block"
            style={{ backgroundColor: "red", height: "40px" }}
          >
            
          </div>
        </Col>
      </Row>
    </Container>
    */
