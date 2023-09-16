import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserXmark } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from 'styled-components';

function Titulo({ onAllReset }) {
    return (
        <div>
            <Title>PIEDRA, PAPEL O TIJERA</Title>
            <MyResetAllButton onClick={onAllReset}>
                <FontAwesomeIcon icon={faUserXmark } className="fa-3x" />
            </MyResetAllButton>
        </div>
    );
}

export default Titulo;

// Styled Components
const mediaStyles = css`
    @media screen and (max-width: 768px) {
        .Title {
            font-size: 2rem;
            text-align: center;
        }

        .MyResetAllButton {
            font-size: 1rem;
            width: 4rem;
            height: 4rem;
        }
    }
`;

const Title = styled.div`
    background-color: var(--main-white);
    color: var(--main-gray);
    margin: 2rem auto;
    padding: 1rem;  
    width: 43%;
    font-size: 5rem;
    max-width: 80%;
    text-align: center;

    ${mediaStyles}
`;

const MyResetAllButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin: 1rem;
    cursor: pointer;
    border: solid 2px var(--main-white);
    background-color: var(--main-gray);
    color: var(--main-white);
    transition: background-color 0.3s ease-in;

    ${mediaStyles}

    &:hover {
        background-color: var(--main-white);
        color: var(--main-gray);
        border: dotted 5px var(--main-red);
    }
`;
