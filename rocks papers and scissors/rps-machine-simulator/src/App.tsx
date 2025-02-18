import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { GameControl, GameControlProps } from './components/GameControl.tsx';
import { Screen } from './screens/Screen.tsx';
import {noFormat} from "./text/text.ts";
  
export function App() {
  const buttonPressed = (output: { value: string; id: string }) => {
    console.log(output);
  };

  const controlA: GameControlProps = {
    id: 'playerA',
    buttonPressed,
  };

  const controlB: GameControlProps = {
    id: 'playerB',
    buttonPressed,
  };
  const controls: GameControlProps[] = [controlA, controlB];

  return (
    <Router>
      <div id="main-frame">
        <header>{noFormat('RBS Machine Simulator')}</header>
        <Screen />
        <section id="controls">
          {controls.map((control) => (<GameControl {...control} key={control.id} />))}
        </section>
      </div>
    </Router>
  );
}
