import {Button} from './Button';

export type GameControlProps = {id : string, buttonPressed : (output: {value: string, id: string}) => void};

export const GameControl = ({buttonPressed, id}: GameControlProps) => {
  return (
    <section id={id} className="gameControl">
      <Button name="ROCK" onClick={() => buttonPressed({ value:'ROCK', id })}/>
      <Button name="PAPER" onClick={() => buttonPressed({ value:'PAPER', id })}/>
      <Button name="SCISSORS" onClick={() => buttonPressed({ value:'SCISSORS', id })}/>
    </section>
  );
}
