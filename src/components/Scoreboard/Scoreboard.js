import React from "react";
import './Scoreboard.css';

const Scoreboard = (props) => {
  return (
    <div className="scoreboard">
      <div className="btn b-score">Blue: {props.blueScore}</div>
      <div className="btn r-score">Red: {props.redScore}</div>
    </div>
  );
};

export default Scoreboard;
