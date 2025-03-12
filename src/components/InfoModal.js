import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BookmarkHeartFill, BookmarkHeart, Book } from "react-bootstrap-icons";

const InfoModal = ({ isShow, movieId }) => {
  const movieList = useSelector((state) => state.movies);
  const [modalClose, setClose] = useState(isShow);
  const Close = () => setClose(true);

  const theChosenOne = movieList[movieId];

  return (
    <>
      <Modal
        show={!modalClose && isShow}
        onHide={Close}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tytuł : {theChosenOne ? JSON.stringify(theChosenOne.title) : ""}
          <br />
          Reżyser : {theChosenOne ? JSON.stringify(theChosenOne.director) : ""}
          <br />
          Opis : {theChosenOne ? JSON.stringify(theChosenOne.description) : ""}
          <br />
          Gatunek : {theChosenOne ? JSON.stringify(theChosenOne.genre) : ""}
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={Close}>
            Zamknij
          </Button>
          <Button variant="primary">
            Dodaj do ulubionych{" "}
            {theChosenOne ? (
              theChosenOne.favorite ? (
                <BookmarkHeartFill />
              ) : (
                <BookmarkHeart />
              )
            ) : (
              ""
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default InfoModal;
