import React, { useState } from "react";
import "../components/main.scss";
import * as Icon from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <footer>
        <center>
          &copy; {new Date().getFullYear()} Copyright:{""}
          <a className="text-dark"></a>
        </center>
      </footer>
    </>
  );
};

export default Footer;
