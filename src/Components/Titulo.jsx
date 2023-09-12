import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserXmark } from "@fortawesome/free-solid-svg-icons";

function Titulo({ onAllReset }) {
    return (
        <div>
            <h1>PIEDRA, PAPEL O TIJERA</h1>

            <button onClick={onAllReset}>
                <FontAwesomeIcon icon={faUserXmark} />
            </button>
        </div>
    );
}

export default Titulo;