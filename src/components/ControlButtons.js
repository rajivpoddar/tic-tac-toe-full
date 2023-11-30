import React from 'react';

function ControlButtons({ onPrevStep, onResetBoard }) {
  return (
    <div className='buttons'>
      <button className='btn' onClick={onPrevStep}>Previous Step</button>
      <button className='btn' onClick={onResetBoard}>Reset Board</button>
    </div>
  );
}

export default ControlButtons;