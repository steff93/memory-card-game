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

export type Player = "player1" | "player2";

export type GameScore = {
  player1: {
    readonly pairs: number;
    readonly moves: number;
  };
  player2: {
    readonly pairs: number;
    readonly moves: number;
  };
};

export type GameType = "single" | "two-player";
