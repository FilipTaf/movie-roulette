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
    <div style={{ position: "relative", height: "250px" }}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Movie Rulette</Navbar.Brand>

          <div
            style={{
              position: "relative",
              height: "80px",
            }}
          >
            <Collapse in={open} dimension="width">
              <div id="example-collapse-text">
                <Card
                  style={{
                    width: "auto",
                    height: "40px",
                    marginTop: "20px",
                    transformOrigin: "left",
                  }}
                >
                  <Nav>
                    <Nav.Link href="/" style={{ color: "red" }}>
                      Main
                    </Nav.Link>
                    <Nav.Link href="/views/app" style={{ color: "red" }}>
                      History
                    </Nav.Link>
                    <Nav.Link href="/views/app" style={{ color: "red" }}>
                      Favorite
                    </Nav.Link>
                  </Nav>
                </Card>
              </div>
            </Collapse>
          </div>

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
