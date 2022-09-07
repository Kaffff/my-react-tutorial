import React, { createContext, Dispatch, memo, useReducer } from "react";
import Board from "./Board";
import { GameAction, GameState } from "../types/type";
import { reducer } from "../reducer/reducer";
import { GameStateContext } from "../context/context";
import Moves from "./Moves";
import Status from "./Status";

const initialState: GameState = {
  history: [Array(9).fill("")],
  stepNumber: 0,
  winner: "",
};

const Game = memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GameStateContext.Provider value={{ state, dispatch }}>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <Status />
          <Moves />
        </div>
      </div>
    </GameStateContext.Provider>
  );
});

export default Game;
