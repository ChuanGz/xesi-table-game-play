import React from "react";
import Board from "./Board";
import "./Game.css";
import {calculateWinner} from "../../src/FindWon"

const Game = () => {
  const [board, setBoard] = React.useState(Array(600).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  const handleResetGame = () => {
    setBoard(Array(600).fill(null));
    setXIsNext(true);
  };
  return (
    <div className="game">{winner && <div className="game-winner">{winner} won!!!</div>}
      <div className="game-board">
      
        <Board cells={board} onClick={handleClick}></Board>
        
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
      </div>
    </div>
  );
};

export default Game;
