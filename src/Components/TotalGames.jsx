import React from "react";

function TotalGames({ userName, totalGames }) {
    return (
        <>
            {userName && (
                <div>
                    <p>Juegos Totales</p>
                    <span>{totalGames}</span>
                </div>
            )}
        </>
    );
}

export default TotalGames;