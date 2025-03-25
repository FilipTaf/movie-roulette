import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { login } from "../store/loginReducer";
import { addUser } from "../store/registerReducer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
import * as Icon from "react-bootstrap-icons";
import Spinner from "react-bootstrap/Spinner";
import "./main.scss";

const Login = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.register.users);
  const isAuth = useAppSelector((state) => state.auth.admin);

  const [loginValue, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSelectLogin, setIsSelectLogin] = useState(false);
  const [isSelectRegister, setIsSelectRegister] = useState(false);
  const codeMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const codePass = /^(?=.*[A-Z])(?=.*[^\w\s]).+$/;

  const handleSelectLogin = () => {
    setIsSelectLogin(true);
  };

  const handleSelectRegister = () => {
    setIsSelectRegister(true);
  };
  const handleReturn = () => {
    setIsSelectLogin(false);
    setIsSelectRegister(false);
    setLogin("");
    setPassword("");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.mail === loginValue);
    if (!user) {
      if (codeMail.test(loginValue) && codePass.test(password)) {
        setIsLoading(true);
        setTimeout(() => {
          dispatch(addUser({ mail: loginValue, password, role }));
          setLogin("");
          setPassword("");
          setIsLoading(false);
          setIsSelectRegister(false);
          setIsSelectLogin(true);
          dispatch(login(role));
          navigate("../Roulette");
        }, 1000);
      } else {
        alert("Enter correct detalis");
      }
    } else {
      alert(
        "There is already an account with this e-mail, I'm moving it to login"
      );
      setIsSelectRegister(false);
      setIsSelectLogin(true);
      setIsLoading(false);
      setPassword("");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const userlogin = users.find((user) => user.mail === loginValue);
    const userpass = users.find((user) => user.password === password);
    const user = users.find(
      (user) => user.mail === loginValue && user.password === password
    );

    if (userlogin) {
      if (userpass) {
        setTimeout(() => {
          dispatch(login(user?.role));
          setIsLoading(false);
          navigate("../Roulette");
        }, 1000);
      } else {
        setTimeout(() => {
          alert("Invalid password");
          setIsLoading(false);
        }, 1000);
      }
    } else {
      setTimeout(() => {
        alert("Invalid e-mail");
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <>
      <div className="LoginPage">
        {isLoading ? (
          <center>
            <div className="login">
              <img
                className="image"
                src="https://i.pinimg.com/originals/79/67/b7/7967b7455ad792c2ed7dac1dcc9ebffe.gif"
                alt="Loading"
              />
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Ładowanie...</span>
              </Spinner>
            </div>
          </center>
        ) : isAuth ? (
          <center>
            <div className="login">
              <h1>
                Welcome {loginValue}
                <Icon.PersonRaisedHand />
              </h1>
              <img
                className="image"
                src="https://i.pinimg.com/originals/79/67/b7/7967b7455ad792c2ed7dac1dcc9ebffe.gif"
                alt="Welcome"
              />
            </div>
          </center>
        ) : isSelectLogin ? (
          <center>
            <div className="login">
              <Form onSubmit={handleLogin}>
                <Form.Label>
                  <h1>Log In</h1>
                </Form.Label>
                <br />

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    value={loginValue}
                    onChange={(e) => setLogin(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button
                  className="loginButtons"
                  onClick={handleReturn}
                  style={{ margin: "1rem" }}
                >
                  Return
                </Button>
                <Button className="loginButtons" type="submit">
                  Login
                </Button>
              </Form>
            </div>
          </center>
        ) : isSelectRegister ? (
          <center>
            <div className="login">
              <Form onSubmit={handleRegister}>
                <Form.Label>
                  <h1>Register</h1>
                </Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>E-Mail</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="E-Mail"
                    value={loginValue}
                    onChange={(e) => setLogin(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSelectTypeAccount">
                  <Form.Label>Type Account</Form.Label>
                  <br />
                  <Form.Check
                    inline
                    label="Admin"
                    value="admin"
                    type="radio"
                    name="role"
                    checked={role === "admin"}
                    onChange={() => setRole("admin")}
                  />
                  <Form.Check
                    inline
                    label="User"
                    value="user"
                    type="radio"
                    name="role"
                    checked={role === "user"}
                    onChange={() => setRole("user")}
                  />
                </Form.Group>
                <Button
                  className="loginButtons"
                  onClick={handleReturn}
                  style={{ margin: "1rem" }}
                >
                  Return
                </Button>
                <Button className="loginButtons" type="submit">
                  Create account
                </Button>
              </Form>
            </div>
          </center>
        ) : (
          <center>
            <div className="login">
              <Button className="loginButtons" onClick={handleSelectLogin}>
                Log In
              </Button>
              <br />
              <Button
                className="loginButtons"
                onClick={handleSelectRegister}
                style={{ marginTop: "" }}
              >
                Create Account
              </Button>
            </div>
          </center>
        )}
      </div>
    </>
  );
};

export default Login;
