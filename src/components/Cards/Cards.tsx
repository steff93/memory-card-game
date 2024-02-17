import { CardDeck } from "../../types";
import Card from "../Card/Card";
import "./Cards.scss";

interface CardsProps {
  cards: CardDeck;
  pushCardId: (id: string) => void;
}

const Cards = ({ cards, pushCardId }: CardsProps) => {
  const handleCardFlip = (cardId: string) => {
    // push cardId to activeSelection
    pushCardId(cardId);
  };

  return (
    <div className="game-board__cards">
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          disabled={false}
          selected={false}
          boardDisabled={false}
          onCardFlip={handleCardFlip}
        />
      ))}
    </div>
  );
};

export default Cards;
