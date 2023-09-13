import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserXmark } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

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

const Title = styled.div`
    background-color: var(--main-white);
    color: var(--main-gray);
    margin: 50px auto 50px auto;
    padding: 20px;
    width: 43%;
    font-size: 5rem;
`;

const MyResetAllButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 1rem;
    cursor: pointer;
    border: solid 2px var(--main-white);
    background-color: var(--main-gray);
    color: var(--main-white);
    transition: background-color 0.3s ease-in;

    &:hover {
        background-color: var(--main-white);
        color: var(--main-gray);
        border: dotted 5px var(--main-red);
    }
`;