import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import History from "./views/history";
import Favorites from "./views/favorites";
import MyNavbar from "./components/navbar";
import Mainbody from "./components/MainBody";
import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/src/views/history" element={<History />} />
          <Route path="/src/views/favorites" element={<Favorites />} />
        </Routes>
      </Router>
      <Mainbody />
    </>
  );
}

export default App;
