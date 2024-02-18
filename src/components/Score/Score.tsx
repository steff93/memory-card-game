import { GameScore, GameType, Player } from "../../types";
import "./Score.scss";

interface ScoreProps {
  score: GameScore;
  gameType: GameType;
  activePlayer: Player;
}

const Score = ({ score, activePlayer, gameType }: ScoreProps) => {
  const { player1, player2 } = score;
  const playerName = activePlayer === "player1" ? "Player 1" : "Player 2";
  const isTwoPlayerBoard = gameType === "two-player";

  return (
    <div className="game-board__score">
      {isTwoPlayerBoard && (
        <h2 className="active-player">{playerName} Move </h2>
      )}

      <div className="player-scores">
        {isTwoPlayerBoard && <h3 className="player"> Player 1</h3>}
        <div className="score score--total">Pairs: {player1.pairs}</div>
        <div className="score score--moves">Moves: {player1.moves}</div>

        {isTwoPlayerBoard && (
          <>
            <h3 className="player"> Player 2</h3>
            <div className="score score--total">Pairs: {player2.pairs}</div>
            <div className="score score--moves">Moves: {player2.moves}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Score;
