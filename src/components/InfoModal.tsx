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
      <Modal show={isShow} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>{}</Modal.Title>
        </Modal.Header>
        {theChosenOne ? (
          <Modal.Body
            style={{
              backgroundImage: "url(" + theChosenOne.img + ")",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div style={{ background: "rgba(0,0,0,0.3)", color: "white" }}>
              Tytuł : {theChosenOne.title}
              <br />
              Reżyser : {theChosenOne.director}
              <br />
              Opis : {theChosenOne.description}
              <br />
              Gatunek : {theChosenOne.genre}
              <br />
              Ocena : {theChosenOne.rating}
            </div>
          </Modal.Body>
        ) : (
          ""
        )}
        <Modal.Footer>
          <Button variant="success" onClick={onHide}>
            Ok
          </Button>
          <Button
            variant="primary"
            onClick={() => dispatch(addFavMovie(theChosenOne.title))}
          >
            Dodaj do ulubionych{" "}
            {forFavoriteIcon ? (
              forFavoriteIcon.favorite ? (
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
