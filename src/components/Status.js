import React from 'react';

const Status = ({ winner, nextBlue }) => {
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next Player: " + (nextBlue ? "Blue" : "Red");
    }

    return <div className="status">{status}</div>;
};

export default Status;