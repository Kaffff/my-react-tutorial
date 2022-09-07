import React, { memo, useContext, useEffect } from "react";
import { GameStateContext } from "../context/context";
import { Mark } from "../types/type";

const calculateWinner = (squares: Mark[]): Mark => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let result: Mark = "";

  lines.map(([a, b, c]) => {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      result = squares[a];
    }
  });
  return result;
};

const Status = memo(() => {
  const { state, dispatch } = useContext(GameStateContext);

  useEffect(() => {
    const winner = calculateWinner(state.history[state.stepNumber]);
    if (winner) dispatch({ type: "setWinner", winner: winner });
  }, [state.stepNumber]);

  return (
    <div>
      {state.winner
        ? `Winner: ${state.winner}`
        : "Next player: " + (state.stepNumber % 2 === 0 ? "X" : "O")}
    </div>
  );
});

export default Status;
