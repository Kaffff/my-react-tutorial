export type Mark = "X" | "O" | "";
export type Squares = Mark[];
export type History = Squares[];

export type GameAction =
  | { type: "mark"; squareIndex: number; symbol: Mark }
  | { type: "move"; stepNumber: number }
  | { type: "setWinner"; winner: Mark };

export type GameState = {
  history: History;
  stepNumber: number;
  winner: Mark;
};
