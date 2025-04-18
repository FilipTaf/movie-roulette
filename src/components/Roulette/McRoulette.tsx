import React, { useRef, useState, useEffect } from "react";
// @ts-ignore
import cl from "./roulette.module.scss";
import RouletteItem from "./RouletteItem.tsx";
import { Roulette, weaponAttributes } from "./roulette.classes.ts";
import InfoModal from "../InfoModal.js";
import { useDispatch } from "react-redux";
import { addMovie } from "../../store/drawnReducer.js";
import Spinner from "react-bootstrap/Spinner";

import { ThemeContext } from "../../ThemeContext.tsx";

interface RouletteElementParams {
  weapons: weaponAttributes[];
  weaponsCount: number;
  transitionDuration: number;
}

const McRoulette = ({
  weapons,
  weaponsCount,
  transitionDuration,
}: RouletteElementParams) => {
  const [rouletteWeapons, setRouletteWeapons] =
    useState<weaponAttributes[]>(weapons);
  const [weaponPrizeId, setWeaponPrizeId] = useState<number>(-1);
  const [isReplay, setIsReplay] = useState<boolean>(false);
  const [isSpin, setIsSpin] = useState<boolean>(false);
  const [isSpinEnd, setIsSpinEnd] = useState<boolean>(false);
  const [winHistory, setWinHistory] = useState<weaponAttributes[]>([]);
  const [show, setShow] = useState(false);

  const rouletteContainerRef = useRef<HTMLDivElement>(null);
  const weaponsRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  function transitionEndHandler() {
    setWinHistory(winHistory.concat(rouletteWeapons[weaponPrizeId]));
    dispatch(addMovie(rouletteWeapons[weaponPrizeId].title));
    setIsSpin(false);
    setIsSpinEnd(true);
    setShow(true);
  }
  function prepare() {
    weaponsRef.current!.style.transition = "none";
    weaponsRef.current!.style.left = "0px";
  }

  function load() {
    let winner = weapons[Math.floor(Math.random() * weapons.length)];

    const roulette = new Roulette({
      winner,
      weapons,
      rouletteContainerRef,
      weaponsRef,
      weaponsCount: weaponsCount,
      transitionDuration: transitionDuration,
    });

    roulette.set_weapons();
    setRouletteWeapons(roulette.weapons);

    return roulette;
  }

  function play() {
    if (isReplay) {
      prepare();
    }
    setIsSpin(true);

    const roulette = load();

    setRouletteWeapons(roulette.weapons);

    setTimeout(() => {
      setIsSpin(true);
      setWeaponPrizeId(roulette.spin());

      setIsReplay(true);
    }, 1000);

    return { roulette };
  }

  return (
    <div>
      <InfoModal
        isShow={show}
        movieId={weaponPrizeId}
        onHide={() => setShow(false)}
        table={rouletteWeapons}
      ></InfoModal>
      <center className={cl.abovelogoblock}>
        <div className="logoblock">
          <img
            id="logo"
            src="/newlogo.svg"
            alt="logo"
            style={{ paddingBottom: "1.5rem", width: "48rem", top: "-5rem" }}
          />
        </div>
      </center>
      {/*i dont want to talk about all of these div. Somebody should do something about it because i dont know how to do it without them*/}
      <div className={cl.aboverollerpoller}>
        <div className={cl.rollerpoller}>
          <div ref={rouletteContainerRef}>
            <div className={cl.evRoulette}>
              <div className={cl.evTarget}></div>
              <div
                ref={weaponsRef}
                className={cl.evWeapons}
                onTransitionEnd={transitionEndHandler}
              >
                {rouletteWeapons.map((w, i) => {
                  return (
                    <RouletteItem
                      key={i}
                      id={i}
                      isLoser={i !== weaponPrizeId && !isSpin && isSpinEnd}
                      title={w["title"]}
                      genre={w["genre"]}
                      img={w["img"]}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <button className={cl.button} disabled={isSpin} onClick={play}>
            {!isSpin ? (
              "Roll"
            ) : (
              <Spinner animation="border" role="status" size="sm">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default McRoulette;
