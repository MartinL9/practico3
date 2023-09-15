import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandBackFist, faHand, faHandScissors} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const randomGenerator = () => {
    let seed = Date.now();
    return () => {
        seed = (seed * 9301 + 49297) % 233280;
        return ((seed / 233280) * 3) + 1;
    };
};

const getRandom = randomGenerator();

function BtnChoices({ onPlayerChoice, isUsernameValid, btnDisabled }) {
    const generatePcChoice = (choice) => {
        const pcChoices = ['Piedra', 'Papel', 'Tijera'];
        const randomChoice = Math.floor(getRandom());
        const pcChoose = pcChoices[randomChoice - 1];
        onPlayerChoice(choice, pcChoose);
    };

    const handleButtonClick = (choice) => {
        generatePcChoice(choice);
    };

    return (
        <Container>
        <BtnContainer>
            {isUsernameValid && (
                <>
                <div className="btnGroup">
                    <BtnSelect onClick={() => handleButtonClick('Piedra')} disabled={btnDisabled} >
                        <FontAwesomeIcon icon={faHandBackFist} className="fa-10x iconCenter" />
                    </BtnSelect>
                    <BtnSpan>Piedra</BtnSpan>
                </div>

                <div className="btnGroup">
                    <BtnSelect onClick={() => handleButtonClick('Papel')} disabled={btnDisabled} >
                        <FontAwesomeIcon icon={faHand} className="fa-10x iconCenter" />
                    </BtnSelect>
                    <BtnSpan>Papel</BtnSpan>
                </div>  

                <div className="btnGroup">
                    <BtnSelect onClick={() => handleButtonClick('Tijera')} disabled={btnDisabled} >
                        <FontAwesomeIcon icon={faHandScissors} className="fa-10x iconCenter" />
                    </BtnSelect>
                    <BtnSpan>Tijera</BtnSpan>
                </div>
                </>
                )}
        </BtnContainer>
        </Container>
    );
}

export default BtnChoices;

// Styled Components
const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
`

const BtnContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin: 20px 0 20px 0;
`

const BtnSelect = styled.button`
    width: 175px;
    height: 175px;
    background-color: var(--main-white);
    color: var(--main-gray);
    border-radius: 50%;
    border: 4px dotted var(--main-red);
    cursor: pointer;
    transition: background-color 0.3s ease-in, transform 0.3s ease-in-out;
    transform-style: preserve-3d;
    perspective: 1000px;
    box-shadow: var(--main-red) 0px 5px 25px, var(--main-white) 0px 5px 35px, rgb(133,51,66) 0px 0px 30px;

    &:hover {
        background-color: var(--main-red);
        color: var(--main-white);
        border: 4px dotted var(--main-white);
        transform: scale(1.1) rotateY(180deg);
    }
`
const BtnSpan = styled.span`
    display: block;
    margin-top: 10px;
    color: var(--main-white);
`