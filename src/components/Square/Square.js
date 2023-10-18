import React from "react";
import './Square.css';


const Square = (props) => {
  const { value, onClick, isBlueTurn } = props;

  const squareStyle = {
    backgroundColor: value === "blue" ? "blue" : value === "red" ? "red"
      : isBlueTurn ? "grey" : "grey",
    color: "white",
  };

  return (
    <button className="square color" onClick={onClick} style={squareStyle}>
      {/* {value} */}
    </button>
  );
};

export default Square;
