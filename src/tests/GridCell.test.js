import { render, screen } from '@testing-library/react';
import GridCell from '../components/GridCell';

test('renders an empty grid cell initially', () => {
  render(<GridCell />);
  const cell = screen.getByRole('gridcell');
  expect(cell).toBeInTheDocument();
  expect(cell).toHaveTextContent('');
});

test('renders a grid cell with X', () => {
  render(<GridCell value='X' />);
  const cell = screen.getByRole('gridcell');
  expect(cell).toHaveTextContent('X');
});

test('renders a grid cell with O', () => {
  render(<GridCell value='O' />);
  const cell = screen.getByRole('gridcell');
  expect(cell).toHaveTextContent('O');
});