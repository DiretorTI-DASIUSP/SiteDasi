import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

export default function Header() {

    return (
        <HeaderWrapper>
            <BackText>dasi</BackText>
            <TitleBox>
                <h2 className="mainTitle">Diretório Acadêmico</h2>
                <h3 className="subtitle">Sistemas de Informação</h3>
            </TitleBox>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header `
    background: url(/images/header-mobile.png) center no-repeat;
    background-size: cover;
    color: #fff;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 760px) { 
        background: url(/images/header-desktop.png) center top / cover no-repeat; 
    }
`

const BackText = styled.div`
    position: absolute;
    color: rgba(255, 255, 255, 0.05);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    font-family: "Oswald", sans-serif;
    font-size: 0rem; /*37.5rem*/
    font-weight: 700;
    letter-spacing: 2rem;

    -webkit-user-select: none;  
    -moz-user-select: none;     
    -ms-user-select: none;    
    user-select: none; 

    @media (min-width: 760px) {
        font-size: 20rem;
    }

    @media (min-width: 1100px) { 
        font-size: 25rem; 
    }

    @media (min-width: 1440px){
        font-size: 37.5rem;
    }
`

const TitleBox = styled.div `
    color: #d9d9d9;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /*justify-content: start;*/
    text-align: center;
    justify-content: center;
    text-transform: uppercase;

    .mainTitle {
        font-size: 2rem;
        font-family: "Montserrat", sans-serif;
        text-shadow: 0 4px 4px #6000FA;
        font-weight: 700;
        line-height: 120%;
        letter-spacing: 0.25rem;

        @media (min-width: 580px) { font-size: 3rem; }
        @media (min-width: 890px) {
            font-size: 5.2rem;
            text-shadow: 0px 4px 4px #6000FA;
        }
        @media (min-width: 1100px) { 
            font-size: 4.5rem; 
        }
        @media (min-width: 1440px){
            font-size: 7rem;
        }
    }
    .subtitle {
        font-family: "Roboto", sans-serif;
        font-size: 2rem;
        line-height: 120%;
        letter-spacing: 0.1rem;
        margin-top: 0.4rem;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        position: relative;
        z-index: 1;

        &::after {
            content: '';
            position: absolute;
            bottom: 0.015em; 
            left: 50%;
            top: 85%;
            transform: translate(-50%, -50%);
            width: 75%;
            height: 19px;
            background-color: #6000facc;
            z-index: -1;
        }

        @media (min-width: 455px) { &::after { width: 103%; } }
        @media (min-width: 890px) {
            font-size: 3.4rem;
            &::after { height: 29px; letter-spacing: 0.2rem; }
        }
        @media (min-width: 1100px) { font-size: 4rem; }
    }
`
