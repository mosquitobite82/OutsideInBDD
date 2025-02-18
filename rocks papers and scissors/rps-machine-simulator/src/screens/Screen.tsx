import {Route, Routes} from "react-router-dom";
import {StartScreen} from "./StartScreen.tsx";
import {GetReady} from "./GetReady.tsx";

export const Screen = () => {
  return (<section id="screen">
    <Routes>
      <Route
        path="/select-players"
        element={<StartScreen />}
      />
      <Route
        path="/getready"
        element={<GetReady />}
      />
      <Route
        path="/"
        element={<StartScreen />}
      />
    </Routes>
  </section>);
}
