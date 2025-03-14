import React from "react";
import Mainbody from "../components/Roulette/MainBody";
import { useAppSelector } from "../store/hooks";

const Main = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth)
  return (
    <div>
      {isAuth ? (<Mainbody />) : (<h1>You must be logged in</h1>)}
    </div>
  );
};

export default Main;
