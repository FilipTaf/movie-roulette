import { Modal, Button } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { BookmarkHeartFill, BookmarkHeart } from "react-bootstrap-icons";
import { addFavMovie } from "../store/movieReducer";
import React from "react";

const InfoModal = ({ isShow, movieId, onHide }) => {
  const dispatch = useAppDispatch();
  const movieList = useAppSelector((state) => state.movies);

  const theChosenOne = movieList[movieId];

  return (
    <>
      <Modal show={isShow} onHide={onHide} backdrop="static" centered>
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
          Ocena : {theChosenOne ? JSON.stringify(theChosenOne.rating) : ""}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={onHide}>
            Ok
          </Button>
          <Button
            variant="primary"
            onClick={() => dispatch(addFavMovie(theChosenOne.title))}
          >
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
