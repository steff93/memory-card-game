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
  const [activeCardSelection, setActiveCardSelection] = useState<Array<string>>(
    []
  );
  const [cardsWithPair, setCardsWithPar] = useState<Array<string>>([]);
  const [currentPairs, setCurrentPairs] = useState(0);
  const [currentMoves, setCurrentMoves] = useState(0);
  const [resetSelection, setResetSelection] = useState(false);

  const cardDeck = cardsConstructor(cats);

  const handleCardPush = (id: string) => {
    setActiveCardSelection((prev) => [...prev, id]);
  };

  const handleResetSelection = () => {
    setTimeout(() => {
      setResetSelection(true);
    }, 1000);
  };

  const handleRemoveSelection = (selection: string[]) => {
    setTimeout(() => {
      setCardsWithPar((prev) => {
        return [...prev, ...selection];
      });
    }, 700);
  };

  const handleIncrementPair = () => {
    setCurrentPairs((prev) => prev + 1);
    setCurrentMoves((prev) => prev + 1);

    handleRemoveSelection(activeCardSelection);
  };

  const handleIncrementMove = () => {
    setCurrentMoves((prev) => prev + 1);

    handleResetSelection();
  };

  const handleFinishGame = () => {
    if (cardsWithPair.length === 20) {
      window.location.reload();
    }
  };

  useEffect(() => {
    getApiData(API_URL).then((response: CatData[]) => {
      setCats(response);
    });
  }, []);

  useEffect(() => {
    if (activeCardSelection.length === 2) {
      if (activeCardSelection[0] === activeCardSelection[1]) {
        handleIncrementPair();
      } else {
        handleIncrementMove();
      }

      setActiveCardSelection([]);
    } else {
      setResetSelection(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCardSelection]);

  useEffect(() => {
    handleFinishGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsWithPair]);

  return (
    <div className="game-board">
      {cats.length ? (
        <>
          <Cards
            cards={cardDeck}
            cardsToRemove={cardsWithPair}
            pushCardId={handleCardPush}
            resetSelection={resetSelection}
          />
          <Score pairs={currentPairs} moves={currentMoves} />
        </>
      ) : null}
    </div>
  );
};

export default Board;
