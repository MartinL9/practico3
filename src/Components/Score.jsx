import React from "react";

function Score({ userName }) {
    return (
        <div className="score">
            {userName ? (
                <>
                    <label htmlFor="userScore">{userName}</label>
                    <p id="userScore"></p>
                </>
            ) : ( 
                <>
                    <label htmlFor="userScore">TU</label>
                    <p id="userScore"></p>
                </>
            )}
            -
            <label htmlFor="computerScore">COMPUTADORA</label>
            <p id="computerScore"></p>
        </div>
    );
}

export default Score;