import React from "react";

function TotalRounds({ userName, round }) {
    const maxRounds = 5;
    return (
        <>
            {userName && (
                <p>Ronda: {round}/{maxRounds}</p>
            )}
        </>
    );
}

export default TotalRounds;