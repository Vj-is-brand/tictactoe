import React, { useState } from "react";
import Board from "./component/Board";
import { calculateWinner } from "./helper";

import "./styles/root.scss"

const App = () => {

  const [ board, setboard ] = useState(Array(9).fill(null));
const [ isXNext , setIsXNext ] = useState(false);

const winner = calculateWinner(board);
const Message = winner ? `winner is ${winner} ` : `Next player is ${ isXNext ? 'x' : 'o' }` ;

const handleSquareClick = (position) => {

  if(board[position] || winner){
   return;
  }

  setboard( (prev)=> {
   return prev.map((Square, pos ) => {
    if(pos === position){
      return isXNext ? 'x' : 'o';
    }
    return Square;
   });
  });
 setIsXNext( prev => !prev);
};

  return (
  <div className="app">
    <h1> TicTacToe</h1>
    <h2>{ Message }</h2>
        <Board board={board} handleSquareClick={handleSquareClick}/>
  </div>
);
};

export default App;
