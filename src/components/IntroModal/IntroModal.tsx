import "./IntroModal.scss";

interface IntroModalProps {
  type?: "start" | "finish";
  totalMoves?: number;
  handleStartGame: () => void;
}
const IntroModal = ({
  type = "start",
  totalMoves,
  handleStartGame,
}: IntroModalProps) => {
  return (
    <div className="intro-modal">
      {type === "start" ? (
        <button className="start-game" onClick={handleStartGame}>
          Start Game
        </button>
      ) : (
        <>
          <div className="game-moves"> Total Moves: {totalMoves}</div>
          <button className="restart-game" onClick={handleStartGame}>
            Restart
          </button>
        </>
      )}
    </div>
  );
};

export default IntroModal;
