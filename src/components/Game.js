import React, { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import Square from "./Square";
import Status from "./Status";
import CalculateWinner from "./Winner";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextBlue, setNextBlue] = useState(true);
  const [blueScore, setBlueScore] = useState(parseInt(localStorage.getItem("blueScore")) || 0);
  const [redScore, setRedScore] = useState(parseInt(localStorage.getItem("redScore")) || 0);

  useEffect(() => {
    localStorage.setItem("blueScore", blueScore);
    localStorage.setItem("redScore", redScore);
  }, [blueScore, redScore]);

  const handleClick = (i) => {
    const squaresCopy = squares.slice();
    if (CalculateWinner(squaresCopy) || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = nextBlue ? "blue" : "red";
    setSquares(squaresCopy);
    setNextBlue(!nextBlue);

    const winner = CalculateWinner(squaresCopy);
    if (winner) {
      if (winner === "blue") {
        setBlueScore((prevScore) => prevScore + 1);
      } else {
        setRedScore((prevScore) => prevScore + 1);
      }
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setNextBlue(true);
  };

  const nextSquare = (i) => {
    const currentPlayer = nextBlue ? "Blue" : "Red";
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
        isBlueTurn={nextBlue ? currentPlayer : ""}
      />
    );
  };

  const winner = CalculateWinner(squares);
  return (
    <div className="game">
      <div className="game-board">
        <div className="content">
          <Status winner={winner} nextBlue={nextBlue} />
          <button className="reset-btn" onClick={resetGame}>
            RESET
          </button>
        </div>
        <div className="board-row">
          {nextSquare(0)}
          {nextSquare(1)}
          {nextSquare(2)}
        </div>
        <div className="board-row">
          {nextSquare(3)}
          {nextSquare(4)}
          {nextSquare(5)}
        </div>
        <div className="board-row">
          {nextSquare(6)}
          {nextSquare(7)}
          {nextSquare(8)}
        </div>
      </div>
      <Scoreboard blueScore={blueScore} redScore={redScore} />
    </div>
  );
};

export default Game;
