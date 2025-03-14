import React from "react";
import MovieList from "../components/ToFavorite/FavArray";
import { useAppSelector } from "../store/hooks";

const Favorites = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth)
  return (
    <div>
      {isAuth ? (<MovieList isSearchClicked={undefined} />) : (<h1>You must be logged in</h1>)}
    </div>
  );
};

export default Favorites;
