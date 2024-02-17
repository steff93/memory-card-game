import { useEffect, useState } from "react";
import MysteryCat from "../../assets/card-front.jpeg";
import { GameCard } from "../../types";
import "./Card.scss";

interface CardProps {
  card: GameCard;
  cardsToRemove: string[];
  resetSelection: boolean;
  onCardFlip: (cardId: string) => void;
}

const Card = ({
  card,
  resetSelection,
  cardsToRemove,
  onCardFlip,
}: CardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const showCard = !cardsToRemove.includes(card.id);

  const handleCardFlip = () => {
    setIsSelected(!isSelected);

    onCardFlip(card.id);
  };

  useEffect(() => {
    if (resetSelection) setIsSelected(false);
  }, [resetSelection]);

  return (
    <div
      className={`card ${isSelected ? "flipped" : ""} ${
        !showCard ? "card--disabled" : ""
      }`}
      onClick={handleCardFlip}
    >
      <div className="card__inner">
        {showCard && (
          <>
            <img className="card__front" src={MysteryCat} />
            <img className="card__back" src={card.url} />
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
