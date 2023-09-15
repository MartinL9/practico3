import React, { useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const WinnerPopup = ({ winner }) => {
    const BlurBackgroundRef = useRef(null);
    const WinnerBannerRef = useRef(null);

    const hideWinnerBanner = () => {
        if (BlurBackgroundRef.current && WinnerBannerRef.current) {
            BlurBackgroundRef.current.style.display = 'none';
            WinnerBannerRef.current.style.display = 'none';
        }
    };

    return (
        <>
            {winner && (
                <BlurBackground ref={BlurBackgroundRef}>
                    <WinnerDiv ref={WinnerBannerRef}>
                        <CenterContent>
                            <CrownIcon icon={faCrown} className='fa-beat'/>
                            <p>Ganador</p>
                            <PWinnerText>{winner}</PWinnerText>
                            <CloseButton onClick={hideWinnerBanner}><CloseIcon icon={faCircleXmark} /></CloseButton>
                        </CenterContent>
                    </WinnerDiv>
                </BlurBackground>
            )}
        </>
    );
}

export default WinnerPopup;

// Styled Components 

const BlurBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    z-index: 999;
    `

const WinnerDiv = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px 30px;
    border: 5px solid var(--main-red);
    border-radius: 5px;
    font-size: 3rem;
    font-weight: bold;
    z-index: 1000;
    color: gold;
    background-color: var(--main-gray);
    box-shadow: 0px 0px 8px rgba(255, 215, 0, 0.8), var(--main-white) 0px 15px 20px 5px;
`

const CenterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: var(--main-white);
`

const CrownIcon = styled(FontAwesomeIcon)`
    font-size: 5rem;
    color: gold;
`

const PWinnerText = styled.p`
    color: gold;
    text-shadow: 0px 0px 8px rgba(255, 215, 0, 0.8);
`

const CloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: solid 2px var(--main-white);
    box-shadow: var(--main-red) 0px 3px 10px, var(--main-white) 0px 0px 10px, rgb(133, 51, 66) 0px 0px 10px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    margin-top: 25px;

    &:hover{
        transform: scale(1.1);
        color: var(--main-red);
    }
`

const CloseIcon = styled(FontAwesomeIcon)`
    color: var(--main-red);
    transition: transform 0.2s ease-in-out;

    &:hover{
        color: #f72d3f;
    }
`
