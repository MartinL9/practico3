import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown, faCheck } from '@fortawesome/free-solid-svg-icons';

const UserInput = ({ onStartGame }) => {
    const [userName, setUserName] = useState('');
    const [inputError, setInputError] = useState('');
    const [isInputVisible, setInputVisible] = useState(true);
    const bannedWords = ['asesino', 'asesinato', 'masacre', 'suicido', 'canibal', 'decapitar', 'matar', 'cadaver', 'matanza', 'crucificado','fascista', 'nazi', 'esclavo','hitler'];

    const handleInputChange = (e) => {
        setUserName(e.target.value);
        setInputError('');
    }

    const userSubmission = () => {
        const containBw = bannedWords.some((word) => userName.toLowerCase().includes(word.toLowerCase()));
        const trimmedUserName = userName.trim();

        const validationError = 
            trimmedUserName === '' ? 'Por favor, ingrese un nombre.' :
            trimmedUserName.length > 20 ? 'Por favor, ingrese un nombre de hasta 20 caracteres.' :
            containBw ? 'Por favor, ingrese un usuario sin palabras prohibidas.' :
            '';

        if (validationError === '') {
            setInputError('');
            setInputVisible(false);
            onStartGame(userName);
        } else {
            setInputError(validationError);
        }
    };

    return (
        <div className="userNameBox">
            {isInputVisible ? ( 
                <>
                    <p id="pInput">Ingrese un nombre para jugar</p>
                    <FontAwesomeIcon icon={faArrowTurnDown} />
                    <input 
                        type="text"
                        id="textInput"
                        placeholder="Ingrese un nombre"
                        autoComplete="off"
                        value={userName}
                        onChange={handleInputChange}
                    >
                    </input>
                    <button className="btnInput" id="submitBtn" onClick={userSubmission}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </button>
                </>
            ) : null }
            {inputError && <p>{inputError}</p>}
        </div>
    );
};

export default UserInput;