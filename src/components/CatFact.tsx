import React, { useContext, useEffect, useState } from "react";
import "./main.scss";
import { ThemeContext } from "../ThemeContext";

const CatFact = () => {
  const [catFact, setCatFact] = useState("");
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        setCatFact(data.fact);
      });
  }, []);

  return (
    <div className={theme == "light" ? "abovefact" : "darkabovefact"}>
      <div className={theme == "light" ? "fact" : "darkfact"}>
        <h1>Fact About Cats:</h1>
        <h4>{catFact}</h4>
      </div>
    </div>
  );
};

export default CatFact;
