import { GameCard } from "../../types";
import "./Card.scss";

interface CardProps {
  card: GameCard;
  selected: boolean;
  disabled: boolean;
  boardDisabled: boolean;
}

const Card = ({ card, selected, disabled, boardDisabled }: CardProps) => {
  return (
    <div className="card">
      <img src={card.url} />
    </div>
  );
};

export default Card;
