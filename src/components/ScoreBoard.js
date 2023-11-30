import React from 'react';

function ScoreBoard({ scores }) {
  return (
    <div className='score-board'>
      <div className='player-score'>
        <h3>Player X</h3>
        <div className='score'>{scores.playerX}</div>
      </div>
      <div className='player-score'>
        <h3>Player O</h3>
        <div className='score'>{scores.playerO}</div>
      </div>
    </div>
  );
}

export default ScoreBoard;