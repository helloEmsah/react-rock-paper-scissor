import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Home = () => {
  return (
    <div>
      <h1>Rock! Paper! Scissor!</h1>
      <p>A simple game, everybody loves it!</p>
      <p>maybe...</p>
      <Link to="/game">
        <button className="btn btn-success mt-5">Click to Play</button>
      </Link>
      <div className="footer ">
        <p>Hi, nice to meet you! Let's get in touch!</p>
        <a
          href="https://github.com/panzerstrike"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub
            className="social"
            style={{ width: 50, height: 50, marginRight: 50 }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/panzerstrike2030/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin
            className="social"
            style={{ width: 50, height: 50, marginLeft: 50 }}
          />
        </a>
      </div>
    </div>
  );
};
