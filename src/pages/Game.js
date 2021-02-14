import React from "react";
import { Link } from "react-router-dom";
import {
  FaRegHandScissors,
  FaRegHandRock,
  FaRegHandPaper,
} from "react-icons/fa";

export const Game = ({ setPlayerPick, setPlayerScore, setOpponentScore }) => {
  const handlePick = (e) => {
    setPlayerPick(e.target.id);
  };

  const resetScore = () => {
    setPlayerScore(0);
    setOpponentScore(0);
  };

  return (
    <div className="container">
      <h3 className="mb-5">Choose Wisely...</h3>
      <Link to="/play">
        <FaRegHandRock
          id="Rock"
          onClick={handlePick}
          style={{
            width: 150,
            height: 150,
            marginRight: 50,
          }}
        />
      </Link>

      <Link to="/play">
        <FaRegHandPaper
          id="Paper"
          onClick={handlePick}
          style={{ width: 150, height: 150 }}
        />
      </Link>
      <Link to="/play">
        <FaRegHandScissors
          id="Scissor"
          onClick={handlePick}
          style={{ width: 150, height: 150, marginLeft: 50 }}
        />
      </Link>

      <div className="mt-5">
        <button className="btn btn-danger" onClick={resetScore}>
          Reset Score
        </button>
        <p className="regular-text mt-5">
          Back to{" "}
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};
