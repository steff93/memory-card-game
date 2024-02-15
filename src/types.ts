/* eslint-disable @typescript-eslint/no-explicit-any */

export type CatData = {
  breed: Array<any>; // we don't really care about breeds
  categories: [
    {
      id: number;
      name: string;
    }
  ];
  id: "string";
  url: "string";
  width: number;
  height: number;
};

export type GameCard = { id: string; url: string };
export type CardDeck = Array<GameCard>;
