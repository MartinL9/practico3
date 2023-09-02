import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandBackFist, faHand, faHandScissors} from "@fortawesome/free-solid-svg-icons";

function BtnChoices() {
    return (
        <div className="btnContainer">
            <div className="btnGroup">
                <button className="btnSelect">
                    <FontAwesomeIcon icon={faHandBackFist} className="fa-10x iconCenter" />
                </button>
            </div>

            <div className="btnGroup">
                <button className="btnSelect">
                    <FontAwesomeIcon icon={faHand} className="fa-10x iconCenter" />
                </button>
            </div>

            <div className="btnGroup">
                <button className="btnSelect">
                    <FontAwesomeIcon icon={faHandScissors} className="fa-10x iconCenter" />
                </button>
            </div>
        </div>
    );
}

export default BtnChoices;