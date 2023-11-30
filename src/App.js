import React, { useState } from 'react';
import './index.css';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';
import ControlButtons from './components/ControlButtons';

function App() {
  const [history, setHistory] = useState([{ board: Array(9).fill(null), isXNext: true }]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const [scores, setScores] = useState({ playerX: 0, playerO: 0 });

  const onCellClick = (index) => {
    const historySlice = history.slice(0, currentMove + 1);
    const current = historySlice[currentMove];
    const newBoard = [...current.board];
    if (newBoard[index] || calculateWinner(newBoard)) {
      return;
    }
    newBoard[index] = current.isXNext ? 'X' : 'O';
    setHistory([...historySlice, { board: newBoard, isXNext: !current.isXNext }]);
    setCurrentMove(historySlice.length);

    const winner = calculateWinner(newBoard);
    if (winner) {
      setScores({
        ...scores,
        [winner === 'X' ? 'playerX' : 'playerO']: scores[winner === 'X' ? 'playerX' : 'playerO'] + 1
      });
    }
  };

  const onPrevStep = () => {
    if (currentMove > 0) setCurrentMove(currentMove - 1);
  };

  const onResetBoard = () => {
    setHistory([{ board: Array(9).fill(null), isXNext: true }]);
    setCurrentMove(0);
  };

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return (
    <div className='App'>
      <ScoreBoard scores={scores} />
      <GameBoard board={current.board} onCellClick={onCellClick} />
      <ControlButtons onPrevStep={onPrevStep} onResetBoard={onResetBoard} />
    </div>
  );
}

export default App;
