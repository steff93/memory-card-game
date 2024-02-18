import { GameScore, GameType } from "../../types";
import "./IntroModal.scss";

interface IntroModalProps {
  type?: "start" | "finish";
  score: GameScore;
  gameType: GameType;
  handleStartGame: (gameType: GameType) => void;
}
const IntroModal = ({
  type = "start",
  gameType,
  score,
  handleStartGame,
}: IntroModalProps) => {
  const handleSingleGameStart = () => {
    return handleStartGame("single");
  };

  const handleTwoPlayerGameStart = () => {
    return handleStartGame("two-player");
  };

  const getWinnerScore = () => {
    const { player1, player2 } = score;
    let winner: string = "";
    let pairs = 0;
    let moves = 0;

    if (player1.pairs > player2.pairs) {
      winner = "Player 1";
      pairs = player1.pairs;
      moves = player1.moves;
    } else if (player1.pairs < player2.pairs) {
      winner = "Player 2";
      pairs = player2.pairs;
      moves = player2.moves;
    } else if (player1.pairs === player2.pairs) {
      if (player1.moves > player2.moves) {
        winner = "Player 1";
        pairs = player1.pairs;
        moves = player1.moves;
      } else {
        winner = "Player 2";
        pairs = player2.pairs;
        moves = player2.moves;
      }
    }

    return { player: winner, pairs, moves };
  };

  const renderStartGameModal = () => {
    return (
      <>
        <button className="start-game" onClick={handleSingleGameStart}>
          Start Single Player Game
        </button>
        <button className="start-game" onClick={handleTwoPlayerGameStart}>
          Start Two Player Game
        </button>
      </>
    );
  };

  const renderFinishGameModal = () => {
    return (
      <>
        {gameType === "single" ? (
          <div className="game-score"> Total Moves: {score?.player1.moves}</div>
        ) : (
          <div className="game-score">
            {getWinnerScore().player} wins with {getWinnerScore().pairs} pairs
            and {getWinnerScore().moves} moves
          </div>
        )}

        <button className="restart-game" onClick={handleSingleGameStart}>
          Restart Single Player Game
        </button>
        <button className="restart-game" onClick={handleTwoPlayerGameStart}>
          Restart Two Player Game
        </button>
      </>
    );
  };

  return (
    <div className="intro-modal">
      {type === "start" ? renderStartGameModal() : renderFinishGameModal()}
    </div>
  );
};

export default IntroModal;
