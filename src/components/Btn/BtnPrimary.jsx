import React from "react";
import styled from "styled-components";

export default function BtnPrimary({ texto, handleClick, className }) {
  return (
    <>
      <button className={className} onClick={handleClick}>
        {texto}
      </button>
    </>
  );
}

styled.section`
  .doIt {
    cursor: pointer;
    font-family: "Rubik", sans-serif;
    color: #f6f4fb;
    background: #6000fadd;
    min-height: 3em;
    width: 7.5em;
    border: none;
    display: block;
    transition: 0.2s;

    &:hover {
      color: #6000fa;
      background-color: #e4e4e4;
    }

    &:active {
      transform: scale(0.97);
    }
  }
`;
