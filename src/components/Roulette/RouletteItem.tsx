import React from "react";
// @ts-ignore
import cl from "./roulette.module.scss";

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
            <p>
              <b>{title}</b>
            </p>
            <p>{genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouletteItem;
