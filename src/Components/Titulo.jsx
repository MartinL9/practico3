import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserXmark } from "@fortawesome/free-solid-svg-icons";

function Titulo() {
    return (
        <div>
            <h1>Piedra, Papel o Tijera</h1>

            <button>
                <FontAwesomeIcon icon={faUserXmark} />
            </button>
        </div>
    );
}

export default Titulo;