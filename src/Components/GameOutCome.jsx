import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const GameOutcome = ({ userName, winner, onGameReset }) => {
    return (
        <>
            {userName && (
                <div className="game-outcome">
                    <h2>¡{winner} ganó el juego!</h2>
                    <p>El juego ha terminado, Reinicie para volver a jugar.</p>
                    <RePlayBtn onClick={onGameReset}>
                        <FontAwesomeIcon icon={faArrowsRotate} />
                    </RePlayBtn>
                </div>
            )}
        </>
    );
};

export default GameOutcome;

const RePlayBtn = styled.button`
    padding: 6px;
    margin-top: 6px;
    margin-bottom: 0;
    height: 50px;
    width: 50px;
    box-sizing: border-box;
    border-radius: 50%;
    cursor: pointer;
    border: solid 2px var(--main-red);
    color: var(--main-red);
    transition: background-color 0.3s ease-in;
    font-size: xx-large;

    &:hover {
        background-color: var(--main-red);
        color: var(--main-white);
    }
`

