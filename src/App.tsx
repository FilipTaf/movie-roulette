import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import History from "./views/History";
import Favorites from "./views/Favorites";
import MyNavbar from "./components/navbar";
import Mainbody from "./components/Roulette/MainBody";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/History" element={<History />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Roulette" element={<Mainbody />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
