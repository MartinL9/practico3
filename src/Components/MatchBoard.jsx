import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHandBackFist,
    faHand,
    faHandScissors,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {
    CollisionUserIcons,
    CollisionCompIcons,
} from '../Styles/AnimationMatch';

const MatchBoard = ({ userChoice, isUser, pcChoice, animationKey }) => {
    const getFontAwesomeIcon = (choice) => {
        switch (choice) {
        case "Piedra":
            return faHandBackFist; 
        case "Papel":
            return faHand; 
        case "Tijera":
            return faHandScissors; 
        default:
            return null;
        }
    };

    return (
        <MatchDiv>
        <SpanChoice>
            <CollisionUserIcons key={animationKey}>
                <IconMatch
                    icon={getFontAwesomeIcon(userChoice)}
                    className={isUser ? "fa-flip-horizontal" : ""}
                />
                <TextSpan
                    className={
                        userChoice === "Piedra" 
                        ? "userR" 
                        : userChoice === "Papel" 
                        ? "userP" 
                        : userChoice === "Tijera" 
                        ? "userS" 
                        : ""}
                >
                    {userChoice}
                </TextSpan>
            </CollisionUserIcons>
        </SpanChoice>
        <VsSpan>VS</VsSpan>
        <SpanChoice>
            <CollisionCompIcons>
                <IconMatch
                icon={getFontAwesomeIcon(pcChoice)}
                className={isUser ? "" : "fa-flip-horizontal"}
                />
                <TextSpan
                className={
                    pcChoice === "Piedra" 
                    ? "pcR" 
                    : pcChoice === "Papel" 
                    ? "pcP" 
                    : pcChoice === "Tijera" 
                    ? "pcS" 
                    : ""}
                    >
                    {pcChoice}
                </TextSpan>
            </CollisionCompIcons>
        </SpanChoice>
        </MatchDiv>
    );
};

    export default MatchBoard;

    // Styled Components
    const MatchDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 860px;
    margin: 0 auto;
    `;

    const SpanChoice = styled.span`
    display: inline-block;
    position: relative;
    `;

    const TextSpan = styled.span`
    position: absolute;
    transform: translate(-50%, -50%);
    color: rgb(133,51,66);

    ${({ className }) => 
        className === "userP" && "top: 67%; left: 45%;"}
        
    ${({ className }) => 
        className === "userR" && "top: 45%; left: 46%;"}
        
    ${({ className }) => 
        className === "userS" && "top: 47%; left: 35%;"}

    ${({ className }) =>
        className === "pcR" && "top: 45%; left: 53%;"}

    ${({ className }) => 
        className === "pcP" && "top: 67%; left: 54%;"}

    ${({ className }) => 
        className === "pcS" && "top: 51%; left: 67%;"}
    `

    const VsSpan = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    `;

    const IconMatch = styled(FontAwesomeIcon)`
    box-shadow: inset -30px 30px 150px var(--main-red), 0 0 50px var(--main-red);
    border-radius: 45%;
    font-size: 7em;
    `
