import { render, screen } from '@testing-library/react';
import ScoreBoard from '../components/ScoreBoard';

test('renders the score board with player scores', () => {
  const scores = { playerX: 1, playerO: 3 };
  render(<ScoreBoard scores={scores} />);
  const playerXScore = screen.getByText('Player X').nextSibling;
  const playerOScore = screen.getByText('Player O').nextSibling;
  expect(playerXScore).toHaveTextContent(scores.playerX.toString());
  expect(playerOScore).toHaveTextContent(scores.playerO.toString());
});
