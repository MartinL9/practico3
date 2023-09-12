import React from "react";

function Score({ userName, userScore, pcScore }) {
    return (
        <>
            {userName && ( 
                <div className="score">
                    <label htmlFor="userScore">{userName}</label>
                    <span>{userScore} - {pcScore}</span>
                    <label htmlFor="computerScore">COMPUTADORA</label>
                </div>
            )}
        </>
    );
}

export default Score;