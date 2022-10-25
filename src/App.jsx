import React, { useState } from "react";
import Board from "./component/Board";
import { calculateWinner } from "./helper";

import "./styles/root.scss"

const App = () => {

  const [ history, setHistory ] = useState([
    { board : Array(9).fill(null), isXNext : true } ,
  ]);
const [ currentMove , setCurrentMove ] = useState(0);
const current = history[currentMove];

const winner = calculateWinner(current.board);
const Message = winner ? `winner is ${winner} ` : `Next player is ${ current.isXNext ? 'x' : 'o' }` ;

const handleSquareClick = (position) => {

  if(current.board[position] || winner){
   return;
  }

  setHistory( (prev)=> {
   const last = prev[prev.length - 1];

   const newBoard = last.board.map((Square, pos ) => {
    if(pos === position){
      return last.isXNext ? 'x' : 'o';
    }
    return Square;
   });

   return prev.concat({ board : newBoard, isXNext : !last.isXNext})
  });
  setCurrentMove(prev =>prev+1)
};

  return (
  <div className="app">
    <h1> TicTacToe</h1>
    <h2>{ Message }</h2>
        <Board board={current.board} handleSquareClick={handleSquareClick}/>
  </div>
);
};

export default App;
