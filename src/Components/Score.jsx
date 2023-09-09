import React from "react";

function Score({ userName, userScore, pcScore }) {
    return (
        <div className="score">
            {userName ? (
                <>
                    <label htmlFor="userScore">{userName}</label>
                </>
            ) : ( 
                <>
                    <label htmlFor="userScore">TU</label>
                </>
            )}
            <span>{userScore} - {pcScore}</span>
            <label htmlFor="computerScore">COMPUTADORA</label>
        </div>
    );
}

export default Score;