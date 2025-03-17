import React from "react";
import MovieList from "../components/ToFavorite/FavArray";
import { useAppSelector } from "../store/hooks";

const Favorites = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  return (
    <div>
      {isAuth ? (
        <MovieList isSearchClicked={undefined} />
      ) : (
        <center className="ultra center-margin">
          <div className="login">
            <h1>You must be logged in</h1>
          </div>
        </center>
      )}
    </div>
  );
};

export default Favorites;
