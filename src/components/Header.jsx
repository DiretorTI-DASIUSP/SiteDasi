import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

function Header() {
    return (
        <Head>
            <h1>DASI</h1>
            <Container>
                <Navbar />
                <BoxTitulo>
                    <h2 className="tituloPrincipal">Diretório Acadêmico</h2>
                    <h3 className="subtitulo">Sistemas de Informação</h3>
                </BoxTitulo>
            </Container>
            
        </Head>
    )
}


const Head = styled.header`

    background: url(/images/header-background.png) no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    height: 100vh;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    position: relative;
    h1 {
        height: 100%;
        font-family: "Oswald", sans-serif;
        text-align: center;
        color: #ffffff0d;
        font-size: 37.5em; /*600px*/
        letter-spacing: 0.12em;
        position: absolute;
        left: 52%;
        transform: translate(-50%, 0);
    }
    @media (max-width: 760px) {
        h1 { display: none; }
    }
`
const Container = styled.section`
    width: 80vw;
    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content:  space-between;
    text-align: center;
    padding-top: 0px; 
    z-index: 1;
    @media (max-width: 1050px) {
        width: 90vw;
    }
    @media (max-width: 760px) {
        width: 100vw;
    }
    @media (max-width: 475px) {
        height: 60vh;
    }
`
const BoxTitulo = styled.div`
    margin-top: 1.25em;
    text-align: center;
    text-transform: uppercase;

    .tituloPrincipal {
        color: #d9d9d9;
        font-family: "Montserrat", sans-serif;
        letter-spacing: 10%;
        font-size: 6em; 
        line-height: 120%;
        text-shadow: 0 7px 4px #6000FA;
    }
    .subtitulo {
        font-family: "Roboto", sans-serif;
        font-size: 4em; /*64px*/
        margin-top: 10px;
        width: 100%;
        line-height: 120%;
        padding-bottom: -80px;
        position: relative;
        text-align: center;
        z-index: 1;
    }
    .subtitulo::after {
        content: '';
        position: absolute;
        bottom: 0.015em; 
        left: 50%;
        transform: translateX(-50%);
        width: 14em;
        height: 29px; 
        background: #6000facc;
        z-index: -1;
    }
    @media (max-width: 931px) {
        .subtitulo::after { width: 10em }
    }
    @media (max-width: 760px) {
        font-size: 12px;
        .subtitulo::after { width: 13em }
    }
    @media (max-width: 475px) {
        font-size: 7.5px;
        .subtitulo::after { width: 95%; height: 19px;}
    }
    @media (max-width: 390px) {
        .subtitulo::after { width: 7.5em;}
    }
`
export default Header;