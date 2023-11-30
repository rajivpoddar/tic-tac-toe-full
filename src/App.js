import React, { useState } from 'react';
import './index.css';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';
import ControlButtons from './components/ControlButtons';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const onCellClick = (index) => {
    // Logic for handling cell click will be added here
  };

  return (
    <div className='App'>
      <ScoreBoard scores={{ playerX: 0, playerO: 0 }} />
      <GameBoard board={board} onCellClick={onCellClick} />
      <ControlButtons onPrevStep={() => {}} onResetBoard={() => {}} />
    </div>
  );
}

export default App;
