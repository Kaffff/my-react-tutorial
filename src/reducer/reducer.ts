import { History, Mark, GameState, GameAction } from "../types/type";

const markBoard = (
  history: History,
  stepNumber: number,
  squareIndex: number,
  symbol: Mark
): History => {
  history = history.slice(0, stepNumber + 1);
  const newSquares = Array.from(history[stepNumber]);
  newSquares[squareIndex] = symbol;
  return history.concat([newSquares]);
};

export const reducer = (
  gameState: GameState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case "mark":
      return {
        ...gameState,
        history: markBoard(
          gameState.history,
          gameState.stepNumber,
          action.squareIndex,
          action.symbol
        ),
        stepNumber: gameState.stepNumber + 1,
      };
    case "move":
      return {
        ...gameState,
        stepNumber: action.stepNumber,
        winner: "",
      };
    case "setWinner":
      return {
        ...gameState,
        winner: action.winner,
      };
    default:
      return gameState;
  }
};
