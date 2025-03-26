import React, { useState, useEffect } from "react";
import "./styles.scss";

const Apper = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("theme-mode", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="app">
      <h1>React Dark Mode with Sass</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Apper;