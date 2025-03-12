import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar expand={false} bg="dark" variant="dark" className="px-3">
      <Container fluid>
        <Navbar.Brand>Movie-roulette</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/src/views/roulette">Main</Nav.Link>
              <Nav.Link href="/src/views/history">History</Nav.Link>
              <Nav.Link href="/src/views/favorites">Favorites</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
