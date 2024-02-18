import { GameType } from "../../types";
import "./IntroModal.scss";

interface IntroModalProps {
  type?: "start" | "finish";
  totalMoves?: number;
  handleStartGame: (gameType: GameType) => void;
}
const IntroModal = ({
  type = "start",
  totalMoves,
  handleStartGame,
}: IntroModalProps) => {
  return (
    <div className="intro-modal">
      {type === "start" ? (
        <>
          <button
            className="start-game"
            onClick={() => handleStartGame("single")}
          >
            Start Single Player Game
          </button>
          <button
            className="start-game"
            onClick={() => handleStartGame("two-player")}
          >
            Start Two Player Game
          </button>
        </>
      ) : (
        <>
          <div className="game-moves"> Total Moves: {totalMoves}</div>
          <button
            className="restart-game"
            onClick={() => handleStartGame("single")}
          >
            Restart
          </button>
        </>
      )}
    </div>
  );
};

export default IntroModal;
