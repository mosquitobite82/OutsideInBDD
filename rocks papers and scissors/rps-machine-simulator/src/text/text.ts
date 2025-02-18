const text = Object.freeze({
  'and': 'and',
  'RBS Machine Simulator' : 'RBS Machine Simulator',
  'player': 'player',
  'rock': 'rock',
  'paper': 'paper',
  'scissors': 'scissors',
  'welcome': 'welcome',
  'nr of players': 'nr of players',
  'start game': 'start game',
});

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

const format = (format : 'sentence-case' | 'title-case' | 'upper-case' | 'lower-case') => {
  return function formatter(key: TextKey){
    if (format === 'lower-case') {
      return text[key].toLowerCase();
    }
    if (format === 'upper-case') {
      return text[key].toUpperCase();
    }

    const splitPattern = format === 'sentence-case' ? '. ' : ' ';
    const unformatted = text[key].split(splitPattern);
    const formatted = unformatted.map(capitalize);
    return formatted.join(splitPattern);
  };
};

export type TextKey = keyof typeof text;
export const noFormat = (key: TextKey) => text[key];
export const lowerCased = format('lower-case');
export const upperCased = format('upper-case');
export const sentenceCased = format('sentence-case');
export const titleCased = format('title-case');

export const welcomeMessageFor = (playerCount: number) => {
  const toPlayerName = (_ : never, i: number) => `${sentenceCased('player')} ${i + 1}`;
  const players =
    Array.from({ length: playerCount }, toPlayerName)
    .join(` ${lowerCased('and')} `);

  return `${sentenceCased('welcome')} ${players}`;
};
