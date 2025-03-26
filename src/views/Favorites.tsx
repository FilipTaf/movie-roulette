import React from "react";
import General from "../components/ToFavorite/Use";
import { useAppSelector } from "../store/hooks";
import MyNavbar from "./Navbar";

const Favorites = () => {
  const isAuth = useAppSelector((state) => state.auth.admin);
  return (
    <div>
      <MyNavbar />
      {isAuth ? (
        <General />
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
