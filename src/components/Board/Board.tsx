import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { getApiData } from "../../dataHelpers";
import { CatData } from "../../types";
import "./Board.scss";

// default component, keep all score state
const Board = () => {
  const [cats, setCats] = useState<CatData[]>([]);

  useEffect(() => {
    getApiData(API_URL).then((response: CatData[]) => {
      setCats(response);
    });
  }, [cats]);

  /**
   * Construct a 24-card deck based on catData
   */
  const cardsConstructor = (catsObject: CatData[]) => {
    const cards: { id: string; url: string }[] = [];

    catsObject.forEach((cat) => {
      cards.push({
        id: cat.id,
        url: cat.url,
      });
    });

    return [...cards, ...cards];
  };

  console.log(cardsConstructor(cats));

  // get 12 cats from api
  // duplicate it, so each entry is added two times
  // shuffle cards

  // children
  // CARDS
  // SCORE
  return <div></div>;
};

export default Board;
