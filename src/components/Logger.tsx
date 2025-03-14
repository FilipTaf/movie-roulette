import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks.ts";
import { login } from "../store/loginReducer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const cUser = "admin";
  const cPass = "guwno";

  const handleLogin = () => {
    if (user === cUser && password === cPass) {
      dispatch(login());
      navigate("../Roulette");
    }
  };

  return (
    <>
      <div className="LoginPage">
        {isAuth ? (
          <>
            <center>
              <div className="login">
                <h1>Witaj {cUser}</h1>
              </div>
            </center>
          </>
        ) : (
          <center>
            <div className="login">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Login</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Login"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
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
                <Button variant="primary" onClick={handleLogin}>
                  Submit
                </Button>
              </Form>
            </div>
          </center>
        )}
        ;
      </div>
    </>
  );
};
export default Login;
