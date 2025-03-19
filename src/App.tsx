import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import History from "./views/History";
import Favorites from "./views/Favorites";
import Account from "./views/Account";
import MyNavbar from "./views/Navbar";
import Main from "./views/Roulette";
import React from "react";
import { useAppSelector } from "./store/hooks";

function App() {
  const isAuth = useAppSelector((state) => state.auth.admin);
  return (
    <>
      <Router>
        <MyNavbar />
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
    </>
  );
}

export default App;
