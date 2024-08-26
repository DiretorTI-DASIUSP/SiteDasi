import React, { useState } from "react";
import styled from "styled-components";

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }
    function clickLink(e) {
        e.preventDefault();
        setTimeout(() => {
            setIsMenuOpen(false);
        }, 400);
    }

    return (
        <Navbar>
            <div className="icon-box">
                <img src="/images/grifo-logo.png" alt="Logo do Grifo" />
            </div>
            <div>
                <button onClick={toggleMenu}>
                    <img 
                        src="/images/menu-icon.png" 
                        alt="Ícone do menu hambúrguer"
                    />
                </button>
            </div>
            <div className={`menu ${isMenuOpen ? 'open' : ''} `}>
                <div onClick={toggleMenu}>
                    <img src="/images/botao-fechar.png" alt="Botão de fechar do menu" />
                </div>
                <ul>
                    <li>
                        <a href="#dasi" onClick={clickLink}>DASI</a>
                    </li>
                    <li>
                        <a href="#setores" onClick={clickLink}>Setores</a>
                    </li>
                    <li>
                        <a href="#quemsomos" onClick={clickLink}>Quem somos</a>
                    </li>
                    <li>
                        <a href="#depoimentos" onClick={clickLink}>Depoimentos</a>
                    </li>
                </ul>
            </div>
            <button className="doIt">Faça parte</button>
        </Navbar>
    );
}

const Navbar = styled.nav`
    width: 100%;
    padding: 40px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;

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
        left: -100%; 
        z-index: 10000;
        transition: left cubic-bezier(.5,0,0,.6) .3s;

        &.open {
            left: 0; 
        }

        div {
            margin: 13% 0 0 70%;
            cursor: pointer;
        }

        ul {
            display: flex;
            width: 100%;
            align-items: center;
            flex-direction: column;

            li {
                font-size: 1.5em;
                list-style: none;
                margin-top: 85px;
                cursor: pointer;

                a { 
                    font-family: 'Montserrat', sans-serif;
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

    @media(min-width: 760px) {
        .icon-box {
            img { width: 80px; }
        }

        .menu {
            width: 50vw;
            left: -50vw;
            ul {
                padding-top: 4em;
            }
        }
    }

    @media(min-width: 1100px) {
        padding: 4em 4.5em;
        justify-content: space-around;
        button { display: none; }
        height: 117px;

        .menu {
            height: 117px;
            position: initial;
            background-color: transparent;
            width: 80%;
            div { display: none; }
            ul {
                height: 100%;
                flex-direction: row;
                justify-content: space-around;
                padding: 0;

                li {
                    margin-top: 0;
                    font-size: 1.2em;
                }
            }
        }

        .doIt {
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
`;

export default Navigation;
