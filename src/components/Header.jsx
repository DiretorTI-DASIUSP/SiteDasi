import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

export default function Header() {

    return (
        <HeaderWrapper>
            <BackText>dasi</BackText>
            <Navigation />
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 760px) { background: url(/images/header-desktop.png) center top / cover no-repeat; }
`

const BackText = styled.div `
    position: fixed;
    color: rgba(255, 255, 255, 0.05);
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-family: "Oswald", sans-serif;
    font-size: 30vw; /*37.5rem*/
    font-weight: 700;
    letter-spacing: 2rem;
    padding-left: 2rem;

    -webkit-user-select: none;  
    -moz-user-select: none;     
    -ms-user-select: none;    
    user-select: none; 

    @media (min-width: 760px) {
        font-size: 35vw;
        letter-spacing: 4rem;
        padding-left: 2rem;
    }
`

const TitleBox = styled.div `
    color: #d9d9d9;
    min-height: 85%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /*justify-content: start;*/
    text-align: center;
    justify-content: center;
    text-transform: uppercase;
    padding-bottom: 100px;

    @media (min-width: 430px) { padding-bottom: 140px; }
    @media (min-width: 530px) { padding-bottom: 80px; }
    @media (min-width: 800px) { padding-bottom: 120px; }
    @media (min-width: 1000px) { padding-bottom: 50px; }

    .mainTitle {
        font-size: 2.5rem;
        font-family: "Montserrat", sans-serif;
        text-shadow: 0 4px 4px #6000FA;
        font-weight: 700;
        line-height: 120%;
        letter-spacing: 0.25rem;

        @media (min-width: 580px) { font-size: 3rem; }
        @media (min-width: 890px) {
            font-size: 5.2rem;
            text-shadow: 0px 7px 4px #6000FA;
            letter-spacing: 0.5rem;
        }
        @media (min-width: 1100px) { font-size: 5.4rem; }
        @media (min-width: 1390px) { font-size: 6rem; }
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