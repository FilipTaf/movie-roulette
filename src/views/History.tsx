import React from "react";
import General from "../components/ToHistory/Use";
import { useAppSelector } from "../store/hooks";

const History = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  return (
    <div>
      {isAuth ? (
        <General />
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
