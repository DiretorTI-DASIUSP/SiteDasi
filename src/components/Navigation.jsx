import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [isMounted, setIsMounted] = useState(false); // Novo estado para rastrear montagem

    useEffect(() => {
        function handleResize() {
            setIsLargeScreen(window.innerWidth >= 1100);
        }
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setIsMounted(true); // Defina como montado após a montagem do componente
    }, []);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <Navbar className={isMounted ? "mounted" : ""}> {/* Adicione a classe 'mounted' quando montado */}
            <div className="icon-box">
                <img src="/images/grifo-logo.png" alt="LOgo do grifo.png" />
            </div>
            <div>
                <button onClick={toggleMenu}>
                    <img 
                        src="/images/menu-icon.png" 
                        alt="Icon do menu hamburguer"
                    />
                </button>
            </div>
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <div onClick={toggleMenu}>
                    <img src="/images/botao-fechar.png" alt="Botão de fechar do menu" />
                </div>
                <ul>
                    <li>
                        <a href="#dasi" onClick={isLargeScreen ? null : toggleMenu}>DASI</a>
                    </li>
                    <li>
                        <a href="#setores" onClick={isLargeScreen ? null : toggleMenu}>Setores</a>
                    </li>
                    <li>
                        <a href="#quemsomos" onClick={isLargeScreen ? null : toggleMenu}>Quem somos</a>
                    </li>
                    <li>
                        <a href="#depoimentos" onClick={isLargeScreen ? null : toggleMenu}>Depoimentos</a>
                    </li>
                </ul>
            </div>
            <button className="doIt">Faça parte</button>
        </Navbar>
    );
}

const Navbar = styled.nav `
    width: 100%;
    padding: 40px;
    background-color: transparent;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    z-index: 5000;

    .icon-box {
        img { width: 64px; }
    }

    button {   
        background: transparent;
        cursor: pointer;
        border: none;
        z-index: 6000;
        position: relative;
    }
    .menu {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        background-color: #181818;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10000;
        overflow: hidden;

        transform: translateX(100%);
        transition: transform cubic-bezier(.5,0,0,.6) .7s, overflow .7s;

        &.open {
            transform: translateX(0);
            overflow: visible;
        }

        div {
            padding: 5px 10px;
            margin-top: 13%;
            margin-left: 70%;
            cursor: pointer;
        }
        ul {
            display: flex;
            width: 100%;
            height: fit-content;

            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 5em 0 10.3em 0;
        
            li {
                width: fit-content;
                font-size: 2em;
                list-style: none;
                margin-top: 85px;
                cursor: pointer;
                a { 
                    font-family: 'Monteserrat', sans-serif;
                    color: #d9d9d9;
                    font-weight: 600;
                    text-decoration: none;
                    position: relative;
                        &::before, &::after {
                            content: '';
                            position: absolute;
                            bottom: -3px;
                            height: 5px;
                            width: 0;
                            background: linear-gradient(to right, #6000FA,#600dcc, #bc88ff, #d9d9d9);
                            transition: width 0.3s ease-out;
                        }
                        &::before { left: 0; }
                        &::after { right: 0; }
                        &:hover::before, &:hover::after {
                            width: 100%;
                        }
                }
            }
        }
    }
    .doIt {
        font-family: "Rubik", sans-serif;
        color: #F6F4FB; 
        background: #6000FAdd;
        height: 2.3125em;
        font-weight: 450;
        font-size: 1.5em;
        width: 7.5em;
        border: none;
        display: none;
    }
    &.mounted .menu { /* Adicione transições apenas quando a classe 'mounted' estiver presente */
        transition: transform cubic-bezier(.5,0,0,.6) .7s;
    }
    @media(min-width: 760px) {
        .icon-box {
            img { width: 75px; }
        }
        .menu { 
            width: 40vw; 
            transform: translateX(260%);
            &.open {
                transform: translateX(150%);
            }
            div {
                margin-top: 17%;
                margin-left: 50%;
            }
            ul {
                padding: 4em 0 10.3em 0;
            }
        }
    }
    @media(min-width: 1100px) {
        padding: 4em 4.5em;
        margin-top: 0;
        justify-content: space-around;
        button { display: none; }
        height: 117px;

        .icon-box {
            img { width: 80px; }
        }
        .menu {
            height: 117px;
            position: initial;
            background-color: transparent;
            width: 80%;

            transform: translateX(0);
            div { display: none; }
            ul {
                height: 100%;
                flex-direction: row;
                justify-content: space-around;
                padding: 0;
                li {
                    margin-top: 0;
                    width: auto;
                    font-size: 1.2em;
                    a {
                        font-family: "Rubik", sans-serif;
                        font-weight: 400;
                        text-decoration: none;
                    }
                }

            }
        }
        button.doIt {
            display: block;
            font-size: 1em; 
            transition: .2s;
            &:hover {
                color: #6000FA;
                background-color: #e4e4e4;
            }
            &:active {
                transform: scale(0.97);
            }
        }

    }
`

export default Navigation;
