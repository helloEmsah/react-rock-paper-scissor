import React from "react";

export const Score = ({ playerScore, opponentScore }) => {
  return (
    <div className="container d-flex justify-content-between">
      <span className="score-text">Player Score: {playerScore}</span>
      <span className="score-text">Opponent Score: {opponentScore}</span>
    </div>
  );
};
