import React from 'react';
import GridCell from './GridCell';

function GameBoard({ board, onCellClick }) {
  return (
    <div className='game-grid' role='grid'>
      {board.map((cell, index) => (
        <GridCell key={index} value={cell} onClick={() => onCellClick(index)} />
      ))}
    </div>
  );
}

export default GameBoard;
