import React, { useState } from "react";
import Board from "./component/Board";
import History from "./component/History";
import StatusMessage from "./component/StatusMessage";
import { calculateWinner } from "./helper";

import "./styles/root.scss"

const App = () => {

  const [ history, setHistory ] = useState([
    { board : Array(9).fill(null), isXNext : true } ,
  ]);
const [ currentMove , setCurrentMove ] = useState(0);
const current = history[currentMove];

const winner = calculateWinner(current.board);

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

const moveTo = move =>{
  setCurrentMove(move);
};

  return (
  <div className="app">
    <h1> TicTacToe</h1>
     <StatusMessage winner={winner} current={current}/>
    <Board board={current.board} handleSquareClick={handleSquareClick}/>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>
  </div>
);
};

export default App;

