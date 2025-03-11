import { Modal, Button } from "react-bootstrap";
import { useState, useSelector } from "react";

export default function InfoModal() {
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
      <Modal
        show={show}
        onHide={Close}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie ? selectedMovie.title : ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Reżyser : {selectedMovie ? selectedMovie.director : ""}
          <br />
          Opis : {selectedMovie ? selectedMovie.description : ""}
          <br />
          Gatunek : {selectedMovie ? selectedMovie.genre : ""}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={Close}>
            Zamknij
          </Button>
          <Button variant="primary">Dodaj do ulubionych</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
