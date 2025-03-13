import React from "react";
import cl from "./rouletteItem.module.css";

interface rouletteItemProps {
  id: number;
  title: string;

  genre: string;
  isLoser: boolean;
}

const RouletteItem = ({ id, title, genre, isLoser }: rouletteItemProps) => {
  return (
    <div
      className={cl.evWeapon}
      style={isLoser ? { opacity: "0.5" } : { opacity: "1" }}
    >
      <div className={`${cl.evWeaponInner}`} id={String(id)}>
        <div className={cl.evWeaponText}>
          <p>{title}</p>
          <p>{genre}</p>
        </div>
      </div>
    </div>
  );
};

export default RouletteItem;
