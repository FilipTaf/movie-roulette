import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../store/loginReducer.ts";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import "../components/main.css";
import * as Icon from "react-bootstrap-icons";

const MyNavbar = () => {
  const [show, setShow] = useState(false);
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Navbar expand={false} variant="light" className="nav">
        <Container fluid>
          <Navbar.Brand>
            <h1>Movie-roulette</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <h1 className="ultra">Movie roulette</h1>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  className="ultra"
                  as={Link}
                  to="/Roulette"
                  onClick={handleClose}
                >
                  <Icon.Hypnotize/> Main
                </Nav.Link>
                <Nav.Link
                  className="ultra"
                  as={Link}
                  to="/History"
                  onClick={handleClose}
                >
                  <Icon.Backpack4Fill/> History
                </Nav.Link>
                <Nav.Link
                  className="ultra"
                  as={Link}
                  to="/Favorites"
                  onClick={handleClose}
                >
                  <Icon.Box2HeartFill/> Favorites
                </Nav.Link>
                <Nav.Link
                  className="ultra"
                  as={Link}
                  to="/Account"
                  onClick={handleClose}
                >
                  <Icon.PersonCircle/> Account
                </Nav.Link>
                {isAuth ? (
                  <Button className="ultra" onClick={handleLogout}>
                    Logout
                  </Button>
                ) : (
                  ""
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
