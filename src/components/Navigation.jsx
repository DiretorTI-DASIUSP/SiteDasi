import React, { useState } from "react";
import styled from "styled-components";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  function clickLink(e, id) {
    e.preventDefault();
    const sec = document.getElementById(id);
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 200);
    setTimeout(() => {
      if (sec) {
        sec.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 300);
  }

  function handleEntrarDasi() {}

  return (
    <Navbar>
      <div className="icon-box">
        <img src="/images/grifo-logo.png" alt="Logo do Grifo" />
      </div>
      <div>
        <button onClick={toggleMenu}>
          <img src="/images/menu-icon.png" alt="Ícone do menu hambúrguer" />
        </button>
      </div>
      <div className={`menu ${isMenuOpen ? "open" : ""} `}>
        <div onClick={toggleMenu}>
          <img src="/images/botao-fechar.png" alt="Botão de fechar do menu" />
        </div>
        <ul>
          <li>
            <a href="https://linktr.ee/dasiusp" target="_blank">
              DASI
            </a>
          </li>
          <li>
            <a href="#quemsomos" onClick={(e) => clickLink(e, "quem-somos")}>
              Quem somos
            </a>
          </li>
          <li>
            <a href="#setores" onClick={(e) => clickLink(e, "setores")}>
              Setores
            </a>
          </li>
          <li>
            <a href="#depoimentos" onClick={(e) => clickLink(e, "depoimentos")}>
              Depoimentos
            </a>
          </li>
        </ul>
      </div>
      <button className="doIt">
        <a href="https://app.pipefy.com/public/form/CpKnmQZ_" target="_blank">
          Faça parte
        </a>
      </button>
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
    img {
      width: 64px;
    }
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
    right: -100%;
    z-index: 10000;
    transition: right cubic-bezier(0.5, 0, 0, 0.6) 0.3s;

    &.open {
      right: 0;
    }

    div {
      margin: 13% 70% 0 0;
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
          font-family: "Montserrat", sans-serif;
          color: #d9d9d9;
          font-weight: 600;
          text-decoration: none;
          position: relative;

          &::before,
          &::after {
            content: "";
            position: absolute;
            bottom: -3px;
            height: 5px;
            width: 0;
            background: linear-gradient(
              to right,
              #6000fa,
              #600dcc,
              #bc88ff,
              #d9d9d9
            );
            transition: width 0.3s ease-out;
          }

          &::before {
            left: 0;
          }
          &::after {
            right: 0;
          }

          &:hover::before,
          &:hover::after {
            width: 100%;
          }
        }
      }
    }
  }

  .doIt {
    font-family: "Rubik", sans-serif;
    color: #f6f4fb;
    background: #6000fadd;
    height: 2.3125em;
    font-weight: 450;
    font-size: 1.5em;
    width: 7.5em;
    border: none;
    display: none;
  }

  @media (min-width: 760px) {
    .icon-box {
      img {
        width: 90px;
      }
    }

    .menu {
      width: 50vw;
      right: -50vw;
      ul {
        padding-top: 4em;
      }
    }
  }

  @media (min-width: 1100px) {
    padding: 4em 4.5em;
    justify-content: space-around;
    button {
      display: none;
    }
    height: 117px;

    .menu {
      height: 117px;
      position: initial;
      background-color: transparent;
      width: 80%;
      div {
        display: none;
      }
      ul {
        height: 100%;
        flex-direction: row;
        justify-content: space-around;
        padding: 0;

        li {
          margin-top: 0;
        }
      }
    }

    .doIt {
      display: block;
      transition: 0.2s;

      a {
        text-decoration: none;
        color: #f6f4fb;
      }

      &:hover {
        color: #6000fa;
        background-color: #e4e4e4;

        a {
          color: #6000fa;
        }
      }

      &:active {
        transform: scale(0.97);
      }
    }
  }
`;

export default Navigation;
