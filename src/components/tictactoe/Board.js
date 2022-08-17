import React from "react";
// import { calculateWinner } from "../../helpers";
import Cell from "./Cell";

const Board = (props) => {
  //   console.log(props);
  // Array(9).fill() --> [underfine.......]
  //   const cells = [null, null, null, "x", "x", "x", null, null, null];
  //   console.log(calculateWinner(cells));
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          className={item === "x" ? "is-x" : item === "o" ? "is-o" : ""}
          onClick={() => props.onClick(index)}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
