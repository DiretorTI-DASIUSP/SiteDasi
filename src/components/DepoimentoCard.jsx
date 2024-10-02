import React from "react";
import styled from "styled-components";

export default function DepoimentoCard({ nome, foto, depoimento }) {
  return (
    <Container>
      <div className="img-texto">
        <img src={foto} alt={nome} />
        <h3>{nome}</h3>
      </div>
      <p>{depoimento}</p>
    </Container>
  );
}

const Container = styled.section`
  background-color: #1f1f1f;
  border-right: 4px solid #5600c5;
  border-bottom: 4px solid #5600c5;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  .img-texto {
    display: flex;
    align-items: center;
    justify-content: flex-start !important;
    gap: 3rem;
    margin-bottom: 20px;
  }

  img {
    width: 124px;
    height: 124px;
    border-radius: 10%;
    margin-bottom: 10px;
  }

  h3 {
    margin: 0;
    font-size: 1.5em;
    color: white;
    font-family: "Rubik", sans-serif;
  }

  p {
    margin: 0;
    font-size: 1em;
    color: white;
    font-family: "Rubik", sans-serif;
    text-align: justify;
  }
`;
