import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import History from "./views/history";
import Favorites from "./views/favorites";
import MyNavbar from "./components/navbar";
import Mainbody from "./components/MainBody";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/history" element={<History />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/roulette" element={<Mainbody />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
