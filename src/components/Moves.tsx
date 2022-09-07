import React, { memo, useContext } from "react";
import { GameStateContext } from "../context/context";

const Moves = memo(() => {
  const { state, dispatch } = useContext(GameStateContext);

  return (
    <div>
      {state.history.map((_, index) => {
        return (
          <li key={index}>
            <button
              onClick={() => {
                if (state.history.length === index) return;
                dispatch({ type: "move", stepNumber: index });
              }}
            >
              {index === 0 ? "Go to game start" : `Go to move #${index}`}
            </button>
          </li>
        );
      })}
    </div>
  );
});

export default Moves;
