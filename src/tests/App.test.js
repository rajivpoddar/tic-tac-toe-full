import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders the score board with player scores', () => {
  render(<App />);
  const playerXScore = screen.getByText('Player X').nextSibling;
  const playerOScore = screen.getByText('Player O').nextSibling;
  expect(playerXScore).toHaveTextContent('0');
  expect(playerOScore).toHaveTextContent('0');
});

test('renders the game board with a 3x3 grid', () => {
  render(<App />);
  const grid = screen.getByRole('grid');
  expect(grid).toBeInTheDocument();
  const cells = screen.getAllByRole('gridcell');
  expect(cells.length).toBe(9);
});

test('renders the control buttons', () => {
  render(<App />);
  const prevStepButton = screen.getByRole('button', { name: /previous step/i });
  const resetBoardButton = screen.getByRole('button', { name: /reset board/i });
  expect(prevStepButton).toBeInTheDocument();
  expect(resetBoardButton).toBeInTheDocument();
});

test('allows players to take turns and place X or O in an empty cell', () => {
  render(<App />);
  const cells = screen.getAllByRole('gridcell');
  fireEvent.click(cells[0]);
  expect(cells[0]).toHaveTextContent('X');
  fireEvent.click(cells[1]);
  expect(cells[1]).toHaveTextContent('O');
});

test('updates the score when a player wins', () => {
  render(<App />);
  // Simulate a win for Player X
  const cells = screen.getAllByRole('gridcell');
  fireEvent.click(cells[0]); // X
  fireEvent.click(cells[3]); // O
  fireEvent.click(cells[1]); // X
  fireEvent.click(cells[4]); // O
  fireEvent.click(cells[2]); // X wins
  const playerXScore = screen.getByText('Player X').nextSibling;
  expect(playerXScore).toHaveTextContent('1');
});

test('prevents further moves once a win or a tie is detected', () => {
  render(<App />);
  // Simulate a win for Player X
  const cells = screen.getAllByRole('gridcell');
  fireEvent.click(cells[0]); // X
  fireEvent.click(cells[3]); // O
  fireEvent.click(cells[1]); // X
  fireEvent.click(cells[4]); // O
  fireEvent.click(cells[2]); // X wins
  // Attempt to make another move
  fireEvent.click(cells[5]);
  expect(cells[5]).toHaveTextContent('');
});

test('resets the board when the reset button is clicked', () => {
  render(<App />);
  const resetBoardButton = screen.getByRole('button', { name: /reset board/i });
  fireEvent.click(resetBoardButton);
  const cells = screen.getAllByRole('gridcell');
  cells.forEach(cell => {
    expect(cell).toHaveTextContent('');
  });
});

test('undos the last move when the previous step button is clicked', () => {
  render(<App />);
  const cells = screen.getAllByRole('gridcell');
  fireEvent.click(cells[0]); // X
  const prevStepButton = screen.getByRole('button', { name: /previous step/i });
  fireEvent.click(prevStepButton);
  expect(cells[0]).toHaveTextContent('');
});