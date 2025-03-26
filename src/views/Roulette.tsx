import React from "react";
import Mainbody from "../components/Roulette/MainBody";
import { useAppSelector } from "../store/hooks";
import CatFact from "../components/CatFact";

import ExampleMovies from "../components/Carousel/ExampleMovies.tsx";
import Faq from "../components/FAQ/Faq.tsx";
import MyNavbar from "./Navbar";
import "../components/main.scss";

const Main = () => {
  const isAuth = useAppSelector((state) => state.auth.admin);
  return (
    <div>
      <div>
        {isAuth ? (
          <>
            <MyNavbar />
            <Mainbody />
            <ExampleMovies />

            <CatFact />
            <Faq />
          </>
        ) : (
          <>
            <MyNavbar />
            <center>
              <div className="login center-margin">
                <h1>You must be logged in</h1>
              </div>
            </center>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
