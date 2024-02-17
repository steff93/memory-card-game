import "./Score.scss";

interface ScoreProps {
  pairs: number;
  moves: number;
}

const Score = ({ pairs, moves }: ScoreProps) => {
  return (
    <div className="game-board__score">
      <div className="score score--total">Pairs: {pairs}</div>
      <div className="score score--moves">Moves: {moves}</div>
    </div>
  );
};

export default Score;
