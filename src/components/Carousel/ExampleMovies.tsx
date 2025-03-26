import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.scss";
import { useAppSelector } from "../../store/hooks";
import { ThemeContext } from "../../ThemeContext";

const ExampleMovies = () => {
  const movieList = useAppSelector((state) => state.movies);

  const rand = Math.floor(Math.random() * 50);
  const { theme } = useContext(ThemeContext);

  const chosenMovies: Array<number> = [];
  for (var i = 0; i < 3; i++) {
    chosenMovies[i] = Math.floor(Math.random() * 50);
  }

  return (
    <div className={theme == "light" ? "maindivcar" : "darkmaindivcar"}>
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
