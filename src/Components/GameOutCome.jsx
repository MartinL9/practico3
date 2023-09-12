import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

const GameOutcome = ({ userName, winner, onGameReset }) => {
    return (
        <>
            {userName && (
                <div className="game-outcome">
                    <h2>¡{winner} ganó el juego!</h2>
                    <button onClick={onGameReset}>
                        <FontAwesomeIcon icon={faArrowsRotate} />
                    </button>
                </div>
            )}
        </>
    );
};

export default GameOutcome;
