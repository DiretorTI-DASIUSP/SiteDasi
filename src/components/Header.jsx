import React from "react";

import styled from "styled-components";
import Navigation from "./Navigation";

function Header() {
    return(
        <HeaderWrapper>
            <MainContainer>
                <h1>DASI</h1>
                <Navigation />
                <TitleBox>
                    <h2 className="mainTitle">Diretório Acadêmico</h2>
                    <h3 className="subtitle">Sistemas de Informação</h3>
                </TitleBox>
            </MainContainer>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    background: url(/images/header-mobile.png) center no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
    height: 100vh;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    overflow: hidden;
    h1 {
        display: none;
        height: 100%;
        font-family: "Oswald", sans-serif;
        text-align: center;
        color: #ffffff0d;
        font-size: 30em; 
        letter-spacing: 0.12em;
        position: absolute;
        left: 50%;
        top: 60%;
        transform: translate(-50%, -50%);
        z-index: -1;

        -webkit-user-select: none;  
        -moz-user-select: none;     
        -ms-user-select: none;    
        user-select: none; 
    }
    @media (min-width: 760px) {
        background: url(/images/header-desktop.png) center top no-repeat;
        background-size: cover;
        h1 { display: block; top: 55%;}
    }
    @media (min-width: 1150px) {
        h1 { font-size: 37.5em; top: 50%; letter-spacing: 0.2em; left: 53%; }
    }
`

const MainContainer = styled.section`
    width: 95%;
    height: 63vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:  space-between;
    text-align: center;
    z-index: 1;

    @media (min-width: 480px) { height: 65vh; }
    @media (min-width: 760px) { width: 100%; height: 70vh; }
`
const TitleBox = styled.div`
    margin-top: 25%;
    text-align: center;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 7.5px;

    .mainTitle {
        color: #d9d9d9;
        font-family: "Montserrat", sans-serif;
        font-size: 6em;
        letter-spacing: 0.1em;
        line-height: 120%;
        text-shadow: 0 7px 4px #6000FA;
    }
    .subtitle {

        font-family: "Roboto", sans-serif;
        font-size: 4em; 
        width: 90%;
        margin-top: 0.4em;
        line-height: 120%;
        position: relative;
        z-index: 1;
    }
    .subtitle::after {
        content: '';
        position: absolute;
        bottom: 0.015em; 
        left: 50%;
        top: 85%;
        transform: translate(-50%, -50%);
        width: 65%;
        height: 19px;
        background-color: #6000facc;
        z-index: -1;
    }
    @media (min-width: 460px) { .subtitle { width: auto; } .subtitle::after { width: 100%; } }
    @media (min-width: 760px) { font-size: 12px; .subtitle::after { height: 29px; } }
    @media (min-width: 931px) { font-size: 15px; margin-top: 15%; }
    @media (min-width: 1420px) { font-size: 16px; }
`

export default Header;