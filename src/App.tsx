import "./components/palette.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import History from "./views/History";
import Favorites from "./views/Favorites";
import Account from "./views/Account";
import Main from "./views/Roulette";
import React, { useContext, useEffect, useState } from "react";
import { useAppSelector } from "./store/hooks";
import Footer from "./views/Footer";
import { ThemeContext, ThemeContextProvider } from "./ThemeContext";

<style>
  @import url
  ('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100..900&display=swap');
</style>;

function App() {
  const isAuth = useAppSelector((state) => state.auth.admin);

  return (
    <>
      <ThemeContextProvider>
        <div className="THEwebsite">
          <Router>
            <Routes>
              {isAuth ? (
                <Route path="/" element={<Main />} />
              ) : (
                <Route path="/" element={<Account />} />
              )}
              <Route path="/History" element={<History />} />
              <Route path="/Favorites" element={<Favorites />} />
              <Route path="/Roulette" element={<Main />} />
              <Route path="/Account" element={<Account />} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </ThemeContextProvider>
    </>
  );
}

export default App;
