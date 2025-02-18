import {useLocation} from "react-router-dom";
import {welcomeMessageFor} from "../text/text";

export const GetReady = () => {
    const location = useLocation();
    const {playerCount} = location.state || {playerCount: 0};

    return (
      <section id="getready-screen" data-testid="getready-screen">
        <p data-testid="player-list">{welcomeMessageFor(playerCount)}</p>
      </section>
    );
};
