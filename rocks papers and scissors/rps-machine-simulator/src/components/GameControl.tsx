import {Button} from './Button';
import {upperCased} from "../text/text";

export type GameControlProps = {id : string, buttonPressed : (output: {value: string, id: string}) => void};

export const GameControl = ({buttonPressed, id}: GameControlProps) => {
  return (
    <section id={id} className="gameControl">
      <Button text={upperCased('rock')} onClick={() => buttonPressed({ value:'ROCK', id })}/>
      <Button text={upperCased('paper')} onClick={() => buttonPressed({ value:'PAPER', id })}/>
      <Button text={upperCased('scissors')} onClick={() => buttonPressed({ value:'SCISSORS', id })}/>
    </section>
  );
}
