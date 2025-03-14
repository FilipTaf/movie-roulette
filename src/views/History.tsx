import React from "react";
import General from "../components/ToHistory/Use";
import { useAppSelector } from "../store/hooks";

const History = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth)
  return (
    <div>
      {isAuth ? (<General />) : (<h1>You must be logged in</h1>)}
    </div>
  );
};

export default History;
