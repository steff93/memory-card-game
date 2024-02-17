import { useState } from "react";
import MysteryCat from "../../assets/card-front.jpeg";
import { GameCard } from "../../types";
import "./Card.scss";

interface CardProps {
  card: GameCard;
  selected: boolean;
  disabled: boolean;
  boardDisabled: boolean;
  onCardFlip: (cardId: string) => void;
}

const Card = ({
  card,
  selected,
  disabled,
  boardDisabled,
  onCardFlip,
}: CardProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardFlip = () => {
    setIsSelected(!isSelected);

    onCardFlip(card.id);
  };

  return (
    <div
      className={`card ${isSelected ? "flipped" : ""}`}
      onClick={handleCardFlip}
    >
      <div className="card__inner">
        <img className="card__front" src={MysteryCat} />
        <img className="card__back" src={card.url} />
      </div>
    </div>
  );
};

export default Card;
