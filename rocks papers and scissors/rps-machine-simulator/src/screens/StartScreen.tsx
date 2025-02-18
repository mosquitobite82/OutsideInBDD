import {NumberInput} from "../components/NumberInput.tsx";
import {Button} from "../components/Button.tsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {sentenceCased, titleCased} from "../text/text.ts";

export const StartScreen = () => {
  const [playerCount, setPlayerCount] = useState<number | null>(null);
  const navigate = useNavigate();
  const startGame = () => navigate(`/getready`, { state: {playerCount} });

  return (
    <section id="start-screen" data-testid="start-screen">
      <NumberInput
        onChange={setPlayerCount}
        value={playerCount}
        label={{id: 'player-count', text: sentenceCased('nr of players')}}
      />
      <Button text={titleCased('start game')} data-testid="start-game" onClick={startGame}></Button>
    </section>
  );
};
