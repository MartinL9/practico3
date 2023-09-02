import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faX } from "@fortawesome/free-solid-svg-icons";

function HistoryGames() {
    return (
        <div>
            <div className="wGames">
                <p>Juegos Ganados</p>
                <span id="spanWin">
                    <FontAwesomeIcon icon={faCrown} />
                </span>
            </div>

            <div className="lGames">
                <p>Juegos Perdidos</p>
                <span id="spanLose">
                    <FontAwesomeIcon icon={faX} />
                </span>
            </div>
        </div>
    );
}

export default HistoryGames;