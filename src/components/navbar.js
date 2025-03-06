import React, { useState } from "react";
import {
  Navbar,
  Container,
  Button,
  Collapse,
  Card,
  Nav,
} from "react-bootstrap";
import { List } from "react-bootstrap-icons";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: "relative", height: "auto" }}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" style={{ width: "80%" }}>
            Movie Rulette
          </Navbar.Brand>

          <Collapse in={open} dimension="width" style={{ width: "10%" }}>
            <Card
              style={{
                width: "auto",
                height: "40px",
                right: "0",
                left: "auto",
              }}
            >
              <Nav>
                <Nav.Link href="/" style={{ color: "black" }}>
                  Main
                </Nav.Link>
                <Nav.Link href="/views/app" style={{ color: "black" }}>
                  History
                </Nav.Link>
                <Nav.Link href="/views/app" style={{ color: "black" }}>
                  Favorite
                </Nav.Link>
              </Nav>
            </Card>
          </Collapse>

          <Button
            variant="outline-light"
            onClick={() => setOpen(!open)}
            aria-controls="-collapse-text"
            aria-expanded={open}
          >
            <List size={30} />
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
