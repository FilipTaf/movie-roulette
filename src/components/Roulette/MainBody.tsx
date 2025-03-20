import React from "react";
//import "../main.scss";
import { useAppSelector } from "../../store/hooks.ts";
// @ts-ignore
import cl from "../../App.module.css";
import McRoulette from "./McRoulette.tsx";


const Mainbody = () => {
  const movie = useAppSelector((state) => state.movies);

  const movieCount = 50;
  const transitionDuration = 3;

  return (
    <div className={cl.App}>
      <div className={cl.wrapper}>
        <McRoulette
          //@ts-ignore
          weapons={movie}
          weaponsCount={movieCount}
          transitionDuration={transitionDuration}
        />
      </div>
    </div>
  );
};

export default Mainbody;
