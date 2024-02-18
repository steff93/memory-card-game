import { GameScore } from "../../types";
import "./Score.scss";

interface ScoreProps {
  score: GameScore;
}

const Score = ({ score }: ScoreProps) => {
  const { player1, player2 } = score;

  return (
    <div className="game-board__score">
      <h3> Player 1</h3>
      <div className="score score--total">Pairs: {player1.pairs}</div>
      <div className="score score--moves">Moves: {player1.moves}</div>

      <h3> Player 2</h3>
      <div className="score score--total">Pairs: {player2.pairs}</div>
      <div className="score score--moves">Moves: {player2.moves}</div>
    </div>
  );
};

export default Score;
