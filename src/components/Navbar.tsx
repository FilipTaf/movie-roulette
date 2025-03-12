import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <Nav.Link as={Link} to="/roulette" onClick={handleClose}>
                Main
              </Nav.Link>
              <Nav.Link as={Link} to="/history" onClick={handleClose}>
                History
              </Nav.Link>
              <Nav.Link as={Link} to="/favorites" onClick={handleClose}>
                Favorites
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
