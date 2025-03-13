import React from "react";
import General from "../components/ToFavorite/Use";
import { useAppSelector } from "../store/hooks";

const Favorites = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth)
  return (
    <div>
      {isAuth ? (<General />) : (<h1>You must be logged in</h1>)}
    </div>
  );
};

export default Favorites;
