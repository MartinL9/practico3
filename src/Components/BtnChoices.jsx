import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandBackFist, faHand, faHandScissors} from "@fortawesome/free-solid-svg-icons";

const randomGenerator = () => {
    let seed = Date.now();
    return () => {
        seed = (seed * 9301 + 49297) % 233280;
        return ((seed / 233280) * 3) + 1;
    };
};

const getRandom = randomGenerator();

function BtnChoices({ onPlayerChoice, isUsernameValid }) {
    const generatePcChoice = (choice) => {
        const pcChoices = ['Piedra', 'Papel', 'Tijera'];
        const randomChoice = Math.floor(getRandom());
        const pcChoose = pcChoices[randomChoice - 1];
        onPlayerChoice(choice, pcChoose);
        console.log(randomChoice);
    };

    const handleButtonClick = (choice) => {
        generatePcChoice(choice);
    };

    return (
        <div className="btnContainer">
            <div className="btnGroup">
                <button className="btnSelect" onClick={() => handleButtonClick('Piedra')} disabled={!isUsernameValid}>
                    <FontAwesomeIcon icon={faHandBackFist} className="fa-10x iconCenter" />
                </button>
            </div>

            <div className="btnGroup">
                <button className="btnSelect" onClick={() => handleButtonClick('Papel')} disabled={!isUsernameValid}>
                    <FontAwesomeIcon icon={faHand} className="fa-10x iconCenter" />
                </button>
            </div>

            <div className="btnGroup">
                <button className="btnSelect" onClick={() => handleButtonClick('Tijera')} disabled={!isUsernameValid}>
                    <FontAwesomeIcon icon={faHandScissors} className="fa-10x iconCenter" />
                </button>
            </div>
        </div>
    );
}

export default BtnChoices;