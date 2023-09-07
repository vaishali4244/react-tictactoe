import React from "react";
import './Scoreboard.css';

const Scoreboard = (props) => {
  return (
    <div className="scoreboard">
      <div className="b-score">Blue: {props.blueScore}</div>
      <div className="r-score">Red: {props.redScore}</div>
    </div>
  );
};

export default Scoreboard;
