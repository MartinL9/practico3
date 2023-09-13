import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faX } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

function HistoryGames({ userName }) {
    return (
        <Container>
            {userName && (
                <HistoryGamesContainer>
                    <div className="wGames">
                        <p>Juegos Ganados</p>
                        <span id="spanWin">
                            <FontAwesomeIcon icon={faCrown} color="gold" />
                        </span>
                    </div>

                    <div className="lGames">
                        <p>Juegos Perdidos</p>
                        <span id="spanLose">
                            <FontAwesomeIcon icon={faX} color="var(--main-red)" />
                        </span>
                    </div>
                </HistoryGamesContainer>
            )}
        </Container>
    );
}

export default HistoryGames;

const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
`

const HistoryGamesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`