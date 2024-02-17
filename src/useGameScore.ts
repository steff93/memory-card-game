import { useReducer } from "react";

const useGameScore = () => {
  const score = { pairs: 0, moves: 0 };

  const initialState = {
    player1: { ...score },
    player2: { ...score },
  } as const;

  const reducer = (
    state: typeof initialState,
    action: { type: string; payload?: Partial<typeof score> }
  ) => {
    switch (action.type) {
      case "update_player_one": {
        return {
          player1: { ...state.player1, ...action.payload },
          player2: { ...state.player2 },
        };
      }
      case "update_player_two": {
        return {
          player1: { ...state.player1 },
          player2: { ...state.player2, ...action.payload },
        };
      }
      case "reset": {
        return { ...initialState };
      }
    }

    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return { gameScore: state, dispatch };
};
export default useGameScore;
