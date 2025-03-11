import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import History from "./views/history";
import MyNavbar from "./components/navbar";
import Mainbody from "./components/MainBody";
import { Modal, Button } from "react-bootstrap";
import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Favorites from "./views/favorites";

function App() {
  const movieList = useSelector((state) => state.movies);

  const [show, setShow] = useState(false);
  const Close = () => setShow(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleShow = (movie) => {
    setSelectedMovie(movie);
    setShow(true);
  };
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
