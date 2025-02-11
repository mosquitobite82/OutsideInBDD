import './App.css'
import {GameControl, GameControlProps} from "./components/GameControl.tsx";

function App() {

  const buttonPressed = (output: { value: string; id: string }) => {
    console.log(output);
  };

  const controlA : GameControlProps = {
    id: 'playerA',
    buttonPressed
  };

  const controlB : GameControlProps = {
    id: 'playerB',
    buttonPressed
  };

  return (
    <div id="main-frame">
      <header>RBS-Machine Simulator</header>

      <section id="screen">

      </section>

      <section id={"controls"}>
        <div id="playerA">
          <header>Player A</header>
          <GameControl {...controlA} />
        </div>
        <div id="playerB">
          <header>Player B</header>
          <GameControl {...controlB} />
        </div>
      </section>

    </div>
  )
}

export default App
