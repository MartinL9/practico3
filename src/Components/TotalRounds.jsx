import React, { useState } from "react";

function TotalRounds({ userScore, pcScore, userName }) {
    let gameResult = '';
    const[round, setRound] = useState(1);
    const maxRounds = 5;

    if(round === maxRounds) {
        if (userScore > pcScore) {
            gameResult = '¡Ganador: ' + userName ;
        } else if (pcScore > userScore) {
            gameResult = 'Ganador: Computadora';
        } 
    } else {
        setRound(round + 1);
    }

    return (
        <p>test: {gameResult}</p>
    );
};

export default TotalRounds;
