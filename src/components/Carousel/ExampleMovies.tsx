import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.scss";
import { useAppSelector } from "../../store/hooks";

const ExampleMovies = () => {
  const movieList = useAppSelector((state) => state.movies);

  const rand = Math.floor(Math.random() * 50);

  const chosenMovies: Array<number> = [];
  for (var i = 0; i < 3; i++) {
    chosenMovies[i] = Math.floor(Math.random() * 50);
  }

  return (
    <div className="maindivcar">
      <center>
        <Carousel>
          <Carousel.Item
            style={{
              backgroundImage: "url(" + movieList[chosenMovies[0]].img + ")",
            }}
          >
            <Carousel.Caption>
              <h3>{movieList[chosenMovies[0]].title}</h3>
              <p>{movieList[chosenMovies[0]].description}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            style={{
              backgroundImage: "url(" + movieList[chosenMovies[1]].img + ")",
            }}
          >
            <Carousel.Caption>
              <h3>{movieList[chosenMovies[1]].title}</h3>
              <p>{movieList[chosenMovies[1]].description}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            style={{
              backgroundImage: "url(" + movieList[chosenMovies[2]].img + ")",
            }}
          >
            <Carousel.Caption>
              <h3>{movieList[chosenMovies[2]].title}</h3>
              <p>{movieList[chosenMovies[2]].description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </center>
    </div>
  );
};

export default ExampleMovies;
