import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers";
const Game = () => {
  const [board, setBoard] = useState(
    Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => null))
  );
  const [littleBoard, setLittleBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  var winner;
  const finalWinner = calculateWinner(littleBoard);
  const [next, setNext] = useState(null);

  const [message, setMessage] = useState([]);

  const handleClick = (row, column) => {
    const boardCopy = [...board];
    const boardLittleCopy = [...littleBoard]; //Who wins small square(X,X,X), in the big table it turns into that sign(X)
    //console.log("in the begiinig " + next);
    if (next !== null) {
      if (row !== next) return;
    }

    winner = calculateWinner(board[row]);

    if (finalWinner || boardCopy[row][column] /* || boardLittleCopy[row] */) {
      console.log(finalWinner);
      return; //end the game, win
    }
    if (winner || boardLittleCopy[row]) {
      boardLittleCopy[row] = winner;
      /* board[row]= board[row].fill(winner); */
      setLittleBoard(boardLittleCopy);
      setNext(null);
      /* if (!message.includes({ rows: row, winners: winner })) {
        console.log(message);
        console.log("first time " + row);
      } */
      message.map((item, i) => {
        if (item.rows === row) return;
        setMessage([...message, { rows: row, winners: winner }]);
      });
      return;
    }

    boardCopy[row][column] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext); //next = column;
    setNext(column);
    //console.log("next " + next);//go to boardCopy[column][col]
  };
  //console.log(next);

  //console.log(winner);
  var result;
  if (finalWinner && finalWinner !== "draw") {
    result = (
      <p className="alert alert-danger" role="alert">
        {"finalWinner: " + finalWinner}
      </p>
    );
  } else if (finalWinner && finalWinner !== "draw") {
    result = (
      <p className="alert alert-warning" role="alert">
        {"Draw for Big game!!"}
      </p>
    );
  } else {
    result = (
      <p className="alert alert-secondary" role="alert">
        {"Next Player: " + (xIsNext ? "X" : "O")}
      </p>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "white",
      }}
    >
      <div>
        <Board squares={board} onClick={handleClick} next={next} />
      </div>
      {/* <p>{finalWinner && finalWinner !== 'draw' ? 'finalWinner: ' + finalWinner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}  </p> */}
      <div /* className='mx-auto' */>
        {message.length > 0 ? (
          message.map((item, i) => {
            return (
              <p className="alert alert-primary" key={i} role="alert">
                {"winner of table " + item.rows + " is " + item.winners}
              </p>
            );
          })
        ) : (
          <></>
        )}
        {result}
      </div>
    </div>
  );
};

export default Game;
