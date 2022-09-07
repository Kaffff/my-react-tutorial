import { createContext, Dispatch } from "react";
import { GameAction, GameState } from "../types/type";

export const GameStateContext = createContext(
  {} as { state: GameState; dispatch: Dispatch<GameAction> }
);
