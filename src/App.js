import React from 'react';
import './index.css';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';
import ControlButtons from './components/ControlButtons';

function App() {
  // State and functions will be added here in future steps

  return (
    <div className='App'>
      <ScoreBoard scores={{ playerX: 0, playerO: 0 }} />
      <GameBoard />
      <ControlButtons onPrevStep={() => {}} onResetBoard={() => {}} />
    </div>
  );
}

export default App;
