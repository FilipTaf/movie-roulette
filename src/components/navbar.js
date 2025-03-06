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
    <div style={{ position: "relative" }}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Movie Rulette</Navbar.Brand>

          <Collapse in={open} dimension="width">
            <div>
              <Card body style={{ width: "400px" }}>
                <Nav>
                  <Nav.Link href="/" style={{ color: "red" }}>
                    Main
                  </Nav.Link>
                  <Nav.Link href="/views/app" style={{ color: "red" }}>
                    Main
                  </Nav.Link>
                </Nav>
              </Card>
            </div>
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
