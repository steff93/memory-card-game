import shuffle from "lodash.shuffle";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { API_URL } from "../../config";
import { getApiData } from "../../dataHelpers";
import { cardsConstructor } from "../../gameHelpers";
import { CardDeck, CatData, Player } from "../../types";
import useGameScore from "../../useGameScore";
import Cards from "../Cards/Cards";
import IntroModal from "../IntroModal/IntroModal";
import Score from "../Score/Score";
import "./Board.scss";

const Board = () => {
  const [showBoard, setShowBoard] = useState(false);
  const [introModalType, setIntroModalType] = useState<"start" | "finish">(
    "start"
  );
  const [cats, setCats] = useState<CatData[]>([]);
  const [activeCardSelection, setActiveCardSelection] = useState<Array<string>>(
    []
  );
  const [cardsWithPair, setCardsWithPair] = useState<Array<string>>([]);
  const [resetSelection, setResetSelection] = useState(false);
  const [isBoardDisabled, setIsBoardDisabled] = useState(false);

  const { gameScore, dispatch } = useGameScore();
  const [activePlayer, setaActivePlayer] = useState<Player>("player1");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cardDeck = useMemo(() => cardsConstructor(cats), [cats, showBoard]);
  const shuffledDeck = useRef<CardDeck>([]);

  const shuffleCards = useCallback(() => {
    shuffledDeck.current = shuffle(cardDeck);
  }, [cats]);

  const handlePlayerSwitch = () => {
    if (activePlayer === "player1") {
      setaActivePlayer("player2");
    } else {
      setaActivePlayer("player1");
    }
  };

  const dispatchType =
    activePlayer === "player1" ? "update_player_one" : "update_player_two";

  const handleCardPush = (id: string) => {
    setActiveCardSelection((prev) => [...prev, id]);
  };

  const handleResetSelection = () => {
    setTimeout(() => {
      setResetSelection(true);
      setIsBoardDisabled(false);
    }, 1000);
  };

  const handleRemoveSelection = (selection: string[]) => {
    setTimeout(() => {
      setCardsWithPair((prev) => {
        return [...prev, ...selection];
      });
      setIsBoardDisabled(false);
    }, 700);
  };

  const handleIncrementPair = () => {
    dispatch({
      type: dispatchType,
      payload: {
        pairs: gameScore[activePlayer].pairs + 1,
        moves: gameScore[activePlayer].moves + 1,
      },
    });

    handleRemoveSelection(activeCardSelection);
  };

  const handleIncrementMove = () => {
    dispatch({
      type: dispatchType,
      payload: {
        moves: gameScore[activePlayer].moves + 1,
      },
    });

    handleResetSelection();
    handlePlayerSwitch();
  };

  const handleStartGame = () => {
    if (introModalType === "finish") {
      handleRestartGame();
    }
    shuffleCards();
    setShowBoard(true);
  };

  const handleFinishGame = () => {
    if (cardsWithPair.length === 20) {
      setShowBoard(false);
      setIntroModalType("finish");
    }
  };

  const handleRestartGame = () => {
    dispatch({ type: "reset" });

    setCardsWithPair([]);
    setShowBoard(true);
    shuffleCards();
  };

  useEffect(() => {
    getApiData(API_URL).then((response: CatData[]) => {
      setCats(response);
    });
  }, [showBoard]);

  useEffect(() => {
    if (activeCardSelection.length === 2) {
      setIsBoardDisabled(true);

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

  return showBoard ? (
    <div className="game-board">
      {cats.length ? (
        <>
          <Cards
            cards={shuffledDeck.current}
            cardsToRemove={cardsWithPair}
            boardDisabled={isBoardDisabled}
            pushCardId={handleCardPush}
            resetSelection={resetSelection}
          />
          <Score
            score={gameScore}
            activePlayer={activePlayer}
            gameType="two-player"
          />
        </>
      ) : null}
    </div>
  ) : (
    <IntroModal
      handleStartGame={handleStartGame}
      type={introModalType}
      totalMoves={gameScore.player1.moves}
    />
  );
};

export default Board;
