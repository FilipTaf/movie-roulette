import React, { useRef, useState, useEffect } from "react";
import cl from "./roulette.module.css";
import RouletteItem from "./RouletteItem/RouletteItem.tsx";
import { Roulette, weaponAttributes } from "../roulette.classes.ts";
import InfoModal from "./InfoModal.js";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/drawnReducer.js";
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
    dispatch(addMovie(weaponPrizeId));
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
    setRouletteWeapons(roulette.allWeapons);

    setTimeout(() => {
      setIsSpin(true);
      setWeaponPrizeId(roulette.spin());
      setIsReplay(true);
    }, 1000);
    return { roulette };
  }

  function changeImageSource(
    imageId: string,
    image1: string,
    image2: string
  ): void {
    const img: HTMLImageElement | null = document.getElementById(
      imageId
    ) as HTMLImageElement;

    let currentImage: string = image1;

    setInterval(() => {
      img.src = currentImage;
      currentImage = currentImage === image1 ? image2 : image1;
    }, 500);
  }
  useEffect(() => {
    changeImageSource("logo", "logo1.svg", "logo2.svg");
  });

  return (
    <div>
      <InfoModal
        isShow={show}
        movieId={weaponPrizeId}
        onHide={() => setShow(false)}
      ></InfoModal>
      <center>
        <div className="logoblock">
          <img
            id="logo"
            src="/logo1.svg"
            alt="logo"
            height={"400px"}
            style={{ paddingTop: " 25px", paddingBottom: "25px" }}
          />
        </div>
      </center>
      <div className={cl.rouletteWrapper}>
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
                  />
                );
              })}
            </div>
          </div>
        </div>
        <button className={cl.button} disabled={isSpin} onClick={play}>
          Roll
        </button>
      </div>
    </div>
  );
};

export default McRoulette;
