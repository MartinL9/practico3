import React from "react";

function TotalRounds({ userName, round, userScore, pcScore }) {
    const maxRounds = 5;

    const adjustedRound = round - Math.min(userScore, pcScore);

    return (
        <>
            {userName && (
                <p>Ronda: {adjustedRound}/{maxRounds}</p>
            )}
        </>
    );
}

export default TotalRounds;