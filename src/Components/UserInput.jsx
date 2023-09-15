import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const UserInput = ({ onStartGame }) => {
    const [playerName, setplayerName] = useState('');
    const [inputError, setInputError] = useState('');
    const [isInputVisible, setInputVisible] = useState(true);
    const bannedWords = ['computadora', 'asesino', 'suicido', 'canibal', 'matar', 'cadaver', 'matanza', 'crucificado','fascista', 'nazi', 'esclavo','hitler'];

    const handleInputChange = (e) => {
        setplayerName(e.target.value);
        setInputError('');
    }

    const userSubmission = () => {
        const containBw = bannedWords.some((word) => playerName.toLowerCase().includes(word.toLowerCase()));
        const trimmedplayerName = playerName.trim();

        const validationError = 
            trimmedplayerName === '' ? 'Por favor, ingrese un nombre.' :
            trimmedplayerName.length > 20 ? 'Por favor, ingrese un nombre de hasta 20 caracteres.' :
            containBw ? 'Por favor, ingrese un usuario sin palabras prohibidas.' :
            '';

        if (validationError === '') {
            setInputError('');
            setInputVisible(false);
            onStartGame(playerName);
        } else {
            setInputError(validationError);
        }
    };

    return (
        <MyDivContainer>
            {isInputVisible ? ( 
                <>
                    <MyP>Ingrese un nombre para jugar</MyP>
                    <MyI icon={faArrowTurnDown} />
                    <MyInputText 
                        type="text"
                        id="textInput"
                        placeholder="Ingrese un nombre"
                        autoComplete="off"
                        value={playerName}
                        onChange={handleInputChange}
                    >
                    </MyInputText>
                    <MyInputButton onClick={userSubmission}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </MyInputButton>
                </>
            ) : null }
            {inputError && <p>{inputError}</p>}
        </MyDivContainer>
    );
};

export default UserInput;

// Styled Components
const MyDivContainer = styled.div`
    text-align: center;
    margin: 20px auto;
`

const MyInputText = styled.input`
    display: flex;
    width: 350px;
    padding: 10px;
    margin: 10px auto;
    font-size: x-large;
    box-sizing: border-box;
    text-align: center;
    background-color: var(--main-gray);
    border: solid 2px var(--main-red);
    border-radius: 8px;
    color: var(--main-white);
    transition: border 0.3s ease-in-out;

    &:hover {
        border-color: var(--main-white);
    }
`
const MyP = styled.p` 
    display: inline;
    margin-right: 10px;
`

const MyI = styled(FontAwesomeIcon)`
    vertical-align: middle;
    margin-top: 24px;
`

const MyInputButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 6px;
    height: 50px;
    width: 50px;
    margin: auto;
    box-sizing: border-box;
    border-radius: 50%;
    font-size: xx-large;
    cursor: pointer;
    border: solid 2px var(--main-red);
    color: var(--main-red);
    transition: background-color 0.3s ease-in;

    &:hover {
        background-color: var(--main-red);
        color: var(--main-white);
    }
`