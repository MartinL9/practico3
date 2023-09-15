import React from "react";
import styled from "styled-components";

function Score({ userName, userScore, pcScore }) {
    return (
        <>
            {userName && (
                <Container>
                    <MyDivScore>
                        <MyLabel htmlFor="userScore">{userName}</MyLabel>
                        <span>{userScore} - {pcScore}</span>
                        <MyLabel htmlFor="computerScore">COMPUTADORA</MyLabel>
                    </MyDivScore>
                </Container> 
            )}
        </>
    );
}

export default Score;

// Styled Components
const Container = styled.div`
    max-width: 950px;
    margin: 0 auto;
`

const MyDivScore = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    text-align: center;
    margin: 50px 20px;
`

const MyLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 20px;
    background-color: var(--main-red);
    border-radius: 8px;
`