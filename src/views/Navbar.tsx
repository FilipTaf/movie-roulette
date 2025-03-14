import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../store/loginReducer";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";

const MyNavbar = () => {
  const [show, setShow] = useState(false);
  const isAuth = useAppSelector((state) => state.auth.isAuth)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useAppDispatch()
  const handleLogout = () => {
    dispatch(logout())
}


  return (
    <Navbar expand={false} bg="dark" variant="dark" className="px-3">
      <Container fluid>
        <Navbar.Brand>Movie-roulette</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/Roulette" onClick={handleClose}>
                Main
              </Nav.Link>
              <Nav.Link as={Link} to="/History" onClick={handleClose}>
                History
              </Nav.Link>
              <Nav.Link as={Link} to="/Favorites" onClick={handleClose}>
                Favorites
              </Nav.Link>
              <Nav.Link as={Link} to="/Account" onClick={handleClose}>
                Account
              </Nav.Link>
              {isAuth ? (<Button onClick={handleLogout}>Logout</Button>) : ("")}   
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
