import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Game, Play } from "./pages";
import { Score } from "./components/Score";

function App() {
  const [playerPick, setPlayerPick] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  return (
    <div className="App">
      <Score playerScore={playerScore} opponentScore={opponentScore} />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game">
            <Game
              playerPick={playerPick}
              setPlayerPick={setPlayerPick}
              playerScore={playerScore}
              setPlayerScore={setPlayerScore}
              opponentScore={opponentScore}
              setOpponentScore={setOpponentScore}
            />
          </Route>
          <Route path="/play">
            <Play
              playerPick={playerPick}
              setPlayerPick={setPlayerPick}
              playerScore={playerScore}
              setPlayerScore={setPlayerScore}
              opponentScore={opponentScore}
              setOpponentScore={setOpponentScore}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
