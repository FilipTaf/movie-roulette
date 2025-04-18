import { Ref } from "react";

export interface weaponAttributes {
  title: string;
  director: string;
  description: string;
  genre: string;
  img: string;
  rating: string;
}

export class Weapon {
  id: number;
  title: string;
  description: string;
  director: string;
  genre: string;
  img: string;
  rating: string;

  constructor(id: number, attrs: weaponAttributes) {
    this.id = id;
    this.title = attrs.title;
    this.genre = attrs.genre;
    this.img = attrs.img;
    this.director = attrs.director;
    this.description = attrs.description;
    this.rating = attrs.rating;
  }
}

export interface rouletteAttributes {
  winner: weaponAttributes;
  weapons: weaponAttributes[];

  rouletteContainerRef: Ref<HTMLElement>;
  weaponsRef: Ref<HTMLElement>;

  weaponsCount?: number;
  transitionDuration?: number;
  itemWidth?: number;
}

export class Roulette {
  winner: weaponAttributes;
  allWeapons: weaponAttributes[];

  rouletteWrapper: Ref<HTMLElement>;
  weaponWrapper: Ref<HTMLElement>;

  weapons: Weapon[];

  weaponsCount: number;
  weaponPrizeId: number;

  transitionDuration: number;

  itemWidth: number;

  constructor(attrs: rouletteAttributes) {
    this.winner = attrs.winner;
    this.allWeapons = attrs.weapons;

    this.weapons = [];

    this.rouletteWrapper = attrs.weaponsRef;

    this.weaponWrapper = attrs.weaponsRef;

    this.weaponsCount = attrs.weaponsCount || 50;

    this.weaponPrizeId = this.randomRange(
      this.weaponsCount / 2,
      this.weaponsCount - 5
    );

    this.transitionDuration = attrs.transitionDuration || 10;

    this.itemWidth = attrs.itemWidth || 200;
  }

  private randomRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  private shuffle = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  set_weapons = () => {
    let weapons: Weapon[] = [];
    let weapon_actors_len = this.allWeapons.length;

    const set_weapon_actors = (from_i: number, to_i: number) => {
      let j = 0;
      const createdWeapons: Weapon[] = [];
      for (let i = from_i; i <= to_i; i += 1) {
        createdWeapons.push(new Weapon(i, this.allWeapons[j]));
        j = j === weapon_actors_len - 1 ? 0 : j + 1;
      }

      this.shuffle(createdWeapons);
      return createdWeapons;
    };

    if (weapon_actors_len === 0) {
      throw new Error("Błōnd! Brak aktorōw.");
    }

    weapons = weapons.concat(set_weapon_actors(0, this.weaponPrizeId - 1));

    weapons[this.weaponPrizeId] = new Weapon(this.weaponPrizeId, this.winner);

    weapons = weapons.concat(
      set_weapon_actors(this.weaponPrizeId + 1, this.weaponsCount - 1)
    );
    this.weapons = weapons;
  };

  spin = () => {
    let el_weapon_width_1_2 = Math.floor(this.itemWidth / 2);
    let el_weapon_width_1_20 = Math.floor(this.itemWidth / 20);

    const randStop =
      (this.weaponPrizeId - 4) * this.itemWidth +
      el_weapon_width_1_2 +
      this.randomRange(el_weapon_width_1_20, 18 * el_weapon_width_1_20);

    // @ts-ignore
    this.weaponWrapper.current.style.transition = `left ${this.transitionDuration}s ease-out`;

    setTimeout(() => {
      // @ts-ignore
      this.weaponWrapper!.current.style.left = `-${randStop}px`;
    }, 100);

    return this.weaponPrizeId;
  };
}
