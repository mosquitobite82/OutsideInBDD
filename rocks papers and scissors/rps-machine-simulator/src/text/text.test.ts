import {lowerCased, noFormat, sentenceCased, TextKey, titleCased, upperCased, welcomeMessageFor} from './text';

describe('text', () => {
  it('should not have the text object directly exposed', () => {
    import('./text')
    .then(({text} : any) => {
      expect(text).toBeUndefined();
    });
  });

  it('should not have a default export', () => {
    import('./text')
    .then((module : any) => {
      expect(module.default).toBeUndefined();
    });
  });

  it('should only have the raw texts reachable through the noFormat function', () => {
      expect(noFormat('RBS Machine Simulator')).toBe('RBS Machine Simulator');
  });

  describe('upperCased', () => {
    it('returns the correct text in correct format', () => {
      expect(upperCased('player')).toBe('PLAYER');
    });
  });

  describe('sentenceCased', () => {
    it.each([
      ['player', 'Player'],
      ['nr of players', 'Nr of players'],
      ['start game', 'Start game'],
    ])
    ('returns the correct text in correct format', (text, expectedFormat) => {
      const result = sentenceCased(text as TextKey);
      expect(result).toBe(expectedFormat);
    });
  });

  describe('titleCased', () => {
    it.each([
      ['player', 'Player'],
      ['nr of players', 'Nr Of Players'],
      ['start game', 'Start Game'],
    ])
    ('returns the correct text in correct format', (text, expectedFormat) => {
      const result = titleCased(text as TextKey);
      expect(result).toBe(expectedFormat);
    });
  });

  describe('lowerCased', () => {
    it.each([
      ['RBS Machine Simulator', 'rbs machine simulator'],
      ['nr of players', 'nr of players']
    ])
    ('returns the correct text in correct format', (text, expectedFormat) => {
      const result = lowerCased(text as TextKey);
      expect(result).toBe(expectedFormat);
    });
  });

  describe('welcomeMessageFor', () => {
    it('renders welcome message with player names for multiple players', () => {
      expect(welcomeMessageFor(2)).toEqual('Welcome Player 1 and Player 2');
    });
  })
});
