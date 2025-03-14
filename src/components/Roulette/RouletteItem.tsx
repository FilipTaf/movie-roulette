import React from "react";
import cl from "./rouletteItem.module.css";

interface rouletteItemProps {
  id: number;
  title: string;
  img: string;
  genre: string;
  isLoser: boolean;
}

const RouletteItem = ({
  id,
  title,
  genre,
  isLoser,
  img,
}: rouletteItemProps) => {
  return (
    <div
      className={cl.evWeapon}
      style={isLoser ? { opacity: "0.5" } : { opacity: "1" }}
    >
      <div className={`${cl.evWeaponInner}`} id={String(id)}>
        <div
          className={cl.evWeaponText}
          style={{
            backgroundImage: "url(" + img + ")",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div style={{ background: "rgba(0,0,0,0.5)" }}>
            <p>{title}</p>
            <p>{genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouletteItem;
