import styled, { keyframes } from "styled-components";

const collisionUserSpan = keyframes`
    0%, 100% {
        transform: translate(0);
    }
    50% {
        transform: translate(70px, 0);
    }
`;

const collisionUserIcons = keyframes`
    0%, 100% {
        transform: translate(0);
    }
    50% {
        transform: translate(70px, 0);
    }
`;

const collisionCompIcons = keyframes`
    0%, 100% {
        transform: translate(0);
    } 
    50% {
        transform: translate(-70px, 0);
    }
`

export const CollisionUserSpan = styled.span`
    animation: ${collisionUserSpan} 0.5s ease-in-out;
`;

export const CollisionUserIcons = styled.div`
    animation: ${collisionUserIcons} 0.5s ease-in-out;
`;

export const CollisionCompIcons = styled.div`
    animation: ${collisionCompIcons} 0.5s ease-in-out;
`