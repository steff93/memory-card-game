import { CardDeck } from "../../types";
import Card from "../Card/Card";
import "./Cards.scss";

interface CardsProps {
  cards: CardDeck;
}

const Cards = ({ cards }: CardsProps) => {
  return (
    <div className="game-board__cards">
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          disabled={false}
          selected={false}
          boardDisabled={false}
        />
      ))}
    </div>
  );
};

export default Cards;
