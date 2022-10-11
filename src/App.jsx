import React from "react";
import Board from "./component/Board";

import "./styles/root.scss"

const App = () => {
  return (
  <div className="app">
    <h1> TicTacToe</h1>
        <Board/>
  </div>
);
};

export default App;
