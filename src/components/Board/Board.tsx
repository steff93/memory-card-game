import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { getApiData } from "../../dataHelpers";
import { cardsConstructor } from "../../gameHelpers";
import { CatData } from "../../types";
import Cards from "../Cards/Cards";
import Score from "../Score/Score";
import "./Board.scss";

const Board = () => {
  const [cats, setCats] = useState<CatData[]>([]);

  useEffect(() => {
    getApiData(API_URL).then((response: CatData[]) => {
      setCats(response);
    });
  }, []);

  const cardDeck = cardsConstructor(cats);

  return (
    <div className="game-board">
      {cats.length ? (
        <>
          <Cards cards={cardDeck} />
          <Score pairs={0} moves={0} />
        </>
      ) : null}
    </div>
  );
};

export default Board;
