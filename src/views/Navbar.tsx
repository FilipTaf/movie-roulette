import React, { useContext, useEffect, useState } from "react";
import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../store/loginReducer.ts";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import "../components/main.scss";
import * as Icon from "react-bootstrap-icons";
import { ThemeContext } from "../ThemeContext.tsx";

const MyNavbar = () => {
  const [show, setShow] = useState(false);
  const isAuth = useAppSelector((state) => state.auth.admin);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("theme-mode", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Navbar
        expand={false}
        variant="light"
        className={sticky ? "navSticky" : "nav"}
      >
        <Container fluid>
          <Navbar.Brand>Movie-roulette</Navbar.Brand>
          <div>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              onClick={function (e) {
                handleShow();
                e.currentTarget.blur();
              }}
              className="showIcon"
            />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  <h2 className="Bigtext">Movie roulette</h2>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 hate">
                  <Nav.Link
                    className="ultra"
                    as={Link}
                    to="/Roulette"
                    onClick={handleClose}
                  >
                    <Icon.Hypnotize /> Main
                  </Nav.Link>
                  <Nav.Link
                    className="ultra"
                    as={Link}
                    to="/History"
                    onClick={handleClose}
                  >
                    <Icon.Backpack4Fill /> History
                  </Nav.Link>
                  <Nav.Link
                    className="ultra"
                    as={Link}
                    to="/Favorites"
                    onClick={handleClose}
                  >
                    <Icon.Box2HeartFill /> Favorites
                  </Nav.Link>
                  <Nav.Link
                    className="ultra"
                    as={Link}
                    to="/Account"
                    onClick={handleClose}
                  >
                    <Icon.PersonCircle /> Account
                  </Nav.Link>
                  {isAuth ? (
                    <Button variant="danger" onClick={handleLogout}>
                      Logout
                    </Button>
                  ) : (
                    ""
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas >
            {theme == "light" ? (
              <Icon.Sun 
                onClick={() => setTheme("dark")}
                className=" showIcon themeIcon"
              ></Icon.Sun>
            ) : (
              <Icon.SunFill
                onClick={() => setTheme("light")}
                className="showIcon themeIcon"
              ></Icon.SunFill>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
