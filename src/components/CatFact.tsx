import React, { useEffect, useState } from "react";
import "./main.scss";

const CatFact = () => {
    const [catFact, setCatFact] = useState("")
    useEffect(() => {
        fetch("https://catfact.ninja/fact")
        .then((res) => res.json())
        .then((data) => {
            setCatFact(data.fact)
        })
    }, [])
    
    return(
        <div className="fact">
            <h1>Fact About Cats:</h1>
            <h3>{catFact}</h3>
        </div>
    )
}

export default CatFact