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
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <Navbar
        expand={false}
        variant="light"
        className={
          theme === "light"
            ? sticky
              ? "navSticky"
              : "nav"
            : sticky
            ? "darknavSticky navbar-dark"
            : "darknav  navbar-dark"
        }
      >
        <Container fluid>
          <Navbar.Brand className="">Movie-roulette</Navbar.Brand>
          <div>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar "
              onClick={function (e) {
                handleShow();
                e.currentTarget.blur();
              }}
              className="showIcon"
              style={{ float: "left" }}
            />

            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header
                closeButton
                className={theme == "light" ? "" : "darkoffhead"}
              >
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  <h2 className="Bigtext">Movie roulette</h2>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className={theme == "light" ? "" : "darkoff"}>
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
            </Navbar.Offcanvas>
            {theme == "light" ? (
              <Icon.Sun
                onClick={() => setTheme("dark")}
                className="themeIcon"
              ></Icon.Sun>
            ) : (
              <Icon.SunFill
                onClick={() => setTheme("light")}
                className="themeIcon"
                id="darkIcon"
              ></Icon.SunFill>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
