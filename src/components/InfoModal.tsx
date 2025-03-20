import { Modal, Button } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { BookmarkHeartFill, BookmarkHeart } from "react-bootstrap-icons";
import { addFavMovie } from "../store/movieReducer";
import React from "react";

const InfoModal = ({ isShow, movieId, onHide, table }) => {
  const dispatch = useAppDispatch();
  const movieList = useAppSelector((state) => state.movies);

  const theChosenOne = table ? table[movieId] : movieList[movieId];
  const movieIndex = movieList.findIndex(
    (movie) => movie.title === theChosenOne?.title
  );
  const forFavoriteIcon = movieList[movieIndex];
  return (
    <>
      <Modal show={isShow} onHide={onHide} centered style={{ color: "white" }}>
        <Modal.Header>
          <Modal.Title>{theChosenOne?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img
              style={{ width: "100%", height: "300px" }}
              src={theChosenOne?.img}
            />
            <br />
            <b>Reżyser</b> : {theChosenOne?.director}
            <br />
            <b> Opis</b> : {theChosenOne?.description}
            <br />
            <b>Gatunek</b> : {theChosenOne?.genre}
            <br />
            <b> Ocena</b> : {theChosenOne?.rating}
          </div>
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
            {forFavoriteIcon?.favorite ? (
              <BookmarkHeartFill />
            ) : (
              <BookmarkHeart />
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default InfoModal;
