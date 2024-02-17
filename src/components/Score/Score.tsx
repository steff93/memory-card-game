import { GameScore } from "../../types";
import "./Score.scss";

interface ScoreProps {
  score: GameScore;
}

const Score = ({ score }: ScoreProps) => {
  return (
    <div className="game-board__score">
      <div> Player 1</div>
      <div className="score score--total">Pairs: {score.player1.pairs}</div>
      <div className="score score--moves">Moves: {score.player1.moves}</div>

      <div> Player 2</div>
      <div className="score score--total">Pairs: {score.player2.pairs}</div>
      <div className="score score--moves">Moves: {score.player2.moves}</div>
    </div>
  );
};

export default Score;
