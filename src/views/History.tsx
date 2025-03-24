import React from "react";
import General from "../components/ToHistory/Use";
import { useAppSelector } from "../store/hooks";
import MyNavbar from "./Navbar";


const History = () => {
  const isAuth = useAppSelector((state) => state.auth.admin);

  return (
    <div>
      <MyNavbar />
      {isAuth ? (
        isAuth == "admin" ? (
          <General />
        ) : (
          <center className="ultra center-margin">
            <div className="login">
              <h1>You must be an admin</h1>
            </div>
          </center>
        )
      ) : (
        <center className="ultra center-margin">
          <div className="login">
            <h1>You must be logged in</h1>
          </div>
        </center>
      )}
    </div>
  );
};

export default History;
