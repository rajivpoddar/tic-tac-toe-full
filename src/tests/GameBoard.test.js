import { render, screen } from '@testing-library/react';
import GameBoard from '../components/GameBoard';

test('renders the game board with a 3x3 grid', () => {
  render(<GameBoard />);
  const grid = screen.getByRole('grid');
  expect(grid).toBeInTheDocument();
  expect(grid).toHaveClass('game-grid');
  const cells = screen.getAllByRole('gridcell');
  expect(cells.length).toBe(9);
});

test('renders empty grid cells initially', () => {
  render(<GameBoard />);
  const cells = screen.getAllByRole('gridcell');
  cells.forEach(cell => {
    expect(cell).toHaveTextContent('');
  });
});
