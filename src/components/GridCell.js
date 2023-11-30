import React from 'react';

function GridCell({ value, onClick }) {
  return (
    <div className='grid-cell' role='gridcell' onClick={onClick}>
      {value}
    </div>
  );
}

export default GridCell;
