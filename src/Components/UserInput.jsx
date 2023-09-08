import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import '../Styles/InputText.css';

const UserInput = ({ setUserName }) => {
    const [inputText, setInputText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isInputVisible, setInputVisible] = useState(true);
    const bannedWords = ['asesino', 'asesinato', 'masacre', 'suicido', 'canibal', 'decapitar', 'matar', 'cadaver', 'matanza', 'crucificado','fascista', 'nazi', 'esclavo','hitler'];

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    }

    const userSubmission = () => {
        const containBw = bannedWords.some((word) => 
        inputText.toLowerCase().includes(word.toLowerCase())
    );

    if (inputText.trim() !== '' && inputText.length <= 20 && !containBw) {
        setUserName(inputText);
        setInputText('');
        setErrorMessage('');
        setInputVisible(false);
        } else if (containBw) {
            setErrorMessage('Por favor, ingrese un usuario sin palabras prohibidas.');
        } else {
            setErrorMessage('Por favor, ingrese un usuario valido de hasta 20 caracteres.');
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
                        value={inputText}
                        onChange={handleInputChange}
                    >
                    </input>

                    <button className="btnInput" id="submitBtn" onClick={userSubmission}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </button>
                </>
            ) : null }
            {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
    );
};

export default UserInput;