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
  const cardDeck = cardsConstructor(cats);

  const [activeCardSelection, setActiveCardSelection] = useState<Array<string>>(
    []
  );
  const [currentPairs, setCurrentPairs] = useState(0);
  const [currentMoves, setCurrentMoves] = useState(0);

  const handleCardPush = (id: string) => {
    setActiveCardSelection((prev) => [...prev, id]);
  };

  useEffect(() => {
    getApiData(API_URL).then((response: CatData[]) => {
      setCats(response);
    });
  }, []);

  useEffect(() => {
    if (activeCardSelection.length === 2) {
      if (activeCardSelection[0] === activeCardSelection[1]) {
        setCurrentPairs((prev) => prev + 1);
        setCurrentMoves((prev) => prev + 1);
        // remove these cards from deck
        // onPairFound
      } else {
        setCurrentMoves((prev) => prev + 1);
        // reset selectedCards
      }

      setActiveCardSelection([]);
    }
  }, [activeCardSelection]);

  return (
    <div className="game-board">
      {cats.length ? (
        <>
          <Cards cards={cardDeck} pushCardId={handleCardPush} />
          <Score pairs={currentPairs} moves={currentMoves} />
        </>
      ) : null}
    </div>
  );
};

export default Board;
