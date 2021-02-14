import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaRegHandScissors,
  FaRegHandRock,
  FaRegHandPaper,
} from "react-icons/fa";

export const Play = ({
  playerPick,
  playerScore,
  setPlayerScore,
  opponentScore,
  setOpponentScore,
}) => {
  const [enemyPick, setEnemyPick] = useState("");
  const [playerWin, setPlayerWin] = useState("");
  const [counter, setCounter] = useState(3);

  const handlePick = () => {
    const picks = ["Rock", "Paper", "Scissor"];
    setEnemyPick(picks[Math.floor(Math.random() * picks.length)]);
  };

  useEffect(() => {
    handlePick();
  }, []);

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : handleResult();

    return () => {
      clearInterval(timer);
    };
  }, [counter, enemyPick]);

  const handleResult = () => {
    if (playerPick === "Rock" && enemyPick === "Scissor") {
      setPlayerWin("Win");
      setPlayerScore(playerScore + 1);
    } else if (playerPick === "Rock" && enemyPick === "Paper") {
      setPlayerWin("Lose");
      setOpponentScore(opponentScore + 1);
    } else if (playerPick === "Scissor" && enemyPick === "Paper") {
      setPlayerWin("Win");
      setPlayerScore(playerScore + 1);
    } else if (playerPick === "Scissor" && enemyPick === "Rock") {
      setPlayerWin("Lose");
      setOpponentScore(opponentScore + 1);
    } else if (playerPick === "Paper" && enemyPick === "Rock") {
      setPlayerWin("Win");
      setPlayerScore(playerScore + 1);
    } else if (playerPick === "Paper" && enemyPick === "Scissor") {
      setPlayerWin("Lose");
      setOpponentScore(opponentScore + 1);
    } else setPlayerWin("Draw");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 d-flex flex-column">
          <span className="regular-text mb-5">You Pick</span>
          {playerPick === "Rock" && (
            <div>
              <FaRegHandRock style={{ width: 150, height: 150 }} />
            </div>
          )}

          {playerPick === "Paper" && (
            <div>
              <FaRegHandPaper style={{ width: 150, height: 150 }} />
            </div>
          )}

          {playerPick === "Scissor" && (
            <div>
              <FaRegHandScissors style={{ width: 150, height: 150 }} />
            </div>
          )}
        </div>

        <div className="col-lg-4 align-self-center">
          {counter === 0 ? (
            <div>
              {playerWin === "Win" && (
                <div>
                  <span className="regular-text align-self-center">
                    You Win
                  </span>
                </div>
              )}
              {playerWin === "Lose" && (
                <div>
                  <span className="regular-text align-self-center">
                    You Lose
                  </span>
                </div>
              )}
              {playerWin === "Draw" && (
                <div>
                  <span className="regular-text align-self-center">Draw</span>
                </div>
              )}
              <Link style={{ textDecoration: "none" }} to="/game">
                <button className="btn btn-danger btn-block restart-button">
                  Restart
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <span className="regular-text">{counter}</span>
            </div>
          )}
        </div>
        <div className="col-lg-4 d-flex flex-column">
          <span className="regular-text mb-5">Opponent Pick</span>
          {counter === 0 ? (
            <div>
              {enemyPick === "Rock" && (
                <div>
                  <FaRegHandRock style={{ width: 150, height: 150 }} />
                </div>
              )}
              {enemyPick === "Paper" && (
                <div>
                  <FaRegHandPaper style={{ width: 150, height: 150 }} />
                </div>
              )}
              {enemyPick === "Scissor" && (
                <div>
                  <FaRegHandScissors style={{ width: 150, height: 150 }} />
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
