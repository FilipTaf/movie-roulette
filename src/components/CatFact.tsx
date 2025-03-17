import React from "react";

const CatFact = () => {
    fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
}

export default CatFact