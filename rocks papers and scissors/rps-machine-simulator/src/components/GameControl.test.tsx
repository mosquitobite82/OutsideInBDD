import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GameControl, GameControlProps } from './GameControl';

describe('GameControl', () => {
  const mockButtonPressed = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const defaultProps: GameControlProps = {
    id: 'control-a',
    buttonPressed: mockButtonPressed,
  };

  test('renders buttons with correct names', () => {
    render(<GameControl {...defaultProps} />);
    expect(screen.getByText('ROCK')).toBeInTheDocument();
    expect(screen.getByText('PAPER')).toBeInTheDocument();
    expect(screen.getByText('SCISSORS')).toBeInTheDocument();
  });

  it.each([
    {id: 'player-a', value: 'ROCK'},
    {id: 'player-b', value: 'PAPER'},
    {id: 'player-a', value: 'SCISSORS'}])
  ('calls buttonPressed with correct value and id', ({id, value} : {id: string, value: string}) => {
    render(<GameControl id={id} buttonPressed={mockButtonPressed} />);
    fireEvent.click(screen.getByText(value));
    expect(mockButtonPressed).toHaveBeenCalledWith({id, value});
  });
});
