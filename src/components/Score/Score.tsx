// Score component
import "./Score.scss";

interface ScoreProps {
  pairs: number;
  moves: number;
}

const Score = ({ pairs, moves }: ScoreProps) => {
  return (
    <div className="game-board__score">
      <div className="game-board__score--total">Pairs: {pairs}</div>
      <div className="game-board__score--moves">Moves: {moves}</div>
    </div>
  );
};

export default Score;
