import React from "react";
import "./Main.css";
import { useSelector } from "react-redux";
import cl from "../App.module.css";
import McRoulette from "./McRoulette.tsx";

const Mainbody = () => {
  const movie = useSelector((state) => state.movies);

  const movieCount = 50;
  const transitionDuration = 3;
  return (
    <div className={cl.App}>
      <div className={cl.wrapper}>
        <McRoulette
          weapons={movie}
          weaponsCount={movieCount}
          transitionDuration={transitionDuration}
        />
      </div>
    </div>
  );
};

export default Mainbody;
