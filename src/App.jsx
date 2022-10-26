import React, { useState } from 'react';
import Board from './component/Board';
import History from './component/History';
import StatusMessage from './component/StatusMessage';
import { calculateWinner } from './helper';

import './styles/root.scss';

const New_Game = [{ board: Array(9).fill(null), isXNext: true }];

const App = () => {
  const [history, setHistory] = useState(New_Game);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(current.board);

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((Square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'x' : 'o';
        }
        return Square;
      });

      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove(prev => prev + 1);
  };
  const onNewGame = () => {
    setHistory(New_Game);
    setCurrentMove(0);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span>TOE
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button type="button" onClick={onNewGame} className={`btn-reset ${winner ? 'active' : ''}`}>
        Start New Game
      </button>
      <h2 style={{fontWeight: 'normal' }}> Currrent Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className='bg-balls'/>
    </div>
  );
};

export default App;
