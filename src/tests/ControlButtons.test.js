import { render, screen, fireEvent } from '@testing-library/react';
import ControlButtons from '../components/ControlButtons';

test('renders the previous step button', () => {
  render(<ControlButtons />);
  const prevStepButton = screen.getByRole('button', { name: /previous step/i });
  expect(prevStepButton).toBeInTheDocument();
});

test('renders the reset board button', () => {
  render(<ControlButtons />);
  const resetBoardButton = screen.getByRole('button', { name: /reset board/i });
  expect(resetBoardButton).toBeInTheDocument();
});

test('clicking the previous step button calls the appropriate function', () => {
  const onPrevStep = jest.fn();
  render(<ControlButtons onPrevStep={onPrevStep} />);
  const prevStepButton = screen.getByRole('button', { name: /previous step/i });
  fireEvent.click(prevStepButton);
  expect(onPrevStep).toHaveBeenCalledTimes(1);
});

test('clicking the reset board button calls the appropriate function', () => {
  const onResetBoard = jest.fn();
  render(<ControlButtons onResetBoard={onResetBoard} />);
  const resetBoardButton = screen.getByRole('button', { name: /reset board/i });
  fireEvent.click(resetBoardButton);
  expect(onResetBoard).toHaveBeenCalledTimes(1);
});