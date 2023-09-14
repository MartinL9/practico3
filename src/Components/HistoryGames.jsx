import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faX } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

function HistoryGames({ userName, userW, pcW }) {
    return (
        <Container>
            {userName && (
                <HistoryGamesContainer>
                    <div className="wGames">
                        <PWins>Juegos Ganados</PWins>
                        <SpanWin>
                            <FontAwesomeIcon icon={faCrown} />
                            <br></br>
                            {userW}
                        </SpanWin>
                    </div>

                    <div className="lGames">
                        <PLose>Juegos Perdidos</PLose>
                        <SpanLose>
                            <FontAwesomeIcon icon={faX} />
                            <br></br>
                            {pcW}
                        </SpanLose>
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

const SpanWin = styled.span`
    color: gold;
    text-shadow: 0px 0px 5px var(--main-white);
`

const SpanLose = styled.span`
    color: var(--main-red);
    text-shadow: 0px 0px 5px var(--main-white);
`

const PWins = styled.p`
    text-shadow: 0px 0px 12px rgb(255, 215, 0); 
    color: white;
`

const PLose = styled.p`
    text-shadow: 0px 0px 12px var(--main-red);
`