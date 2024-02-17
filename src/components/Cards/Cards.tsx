import { CardDeck } from "../../types";
import Card from "../Card/Card";
import "./Cards.scss";

interface CardsProps {
  cards: CardDeck;
  cardsToRemove: string[];
  resetSelection: boolean;
  boardDisabled: boolean;
  pushCardId: (id: string) => void;
}

const Cards = ({
  cards,
  pushCardId,
  resetSelection,
  boardDisabled,
  cardsToRemove,
}: CardsProps) => {
  const handleCardFlip = (cardId: string) => {
    // push cardId to activeSelection
    pushCardId(cardId);
  };

  return (
    <div
      className={`game-board__cards ${
        boardDisabled ? "game-board__cards--disabled" : ""
      }`}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          disabled={false}
          selected={false}
          cardsToRemove={cardsToRemove}
          resetSelection={resetSelection}
          onCardFlip={handleCardFlip}
        />
      ))}
    </div>
  );
};

export default Cards;
