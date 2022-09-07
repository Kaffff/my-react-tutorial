import React, { FC, useContext, memo } from "react";
import { GameStateContext } from "../context/context";
import { Mark } from "../types/type";

type Props = {
  index: number;
};

const Square: FC<Props> = memo(({ index }) => {
  const { state, dispatch } = useContext(GameStateContext);
  const currentSquares = state.history[state.stepNumber];

  const onClickHandler = () => {
    if (currentSquares[index] !== "" || state.winner !== "") return;
    const symbol: Mark = state.stepNumber % 2 === 0 ? "X" : "O";
    dispatch({ type: "mark", squareIndex: index, symbol: symbol });
  };

  return (
    <button className="square" onClick={onClickHandler}>
      {currentSquares[index]}
    </button>
  );
});

export default Square;
