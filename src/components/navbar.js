import React from "react";
import { Navbar, Conteiner, Button } from "react-bootstrap";
import { List } from "react-bootstrap-icons";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Conteiner>
        <Navbar.Brand href="/">MyApp</Navbar.Brand>

        <Button variant="outline-light">
          <List size={30} />
        </Button>
      </Conteiner>
    </Navbar>
  );
};

export default NavigationBar;
