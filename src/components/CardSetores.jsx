import React from "react";
import styled from "styled-components";

export default function CardSetores({ foto, titulo, texto }) {
  return (
    <CardsContainer>
      <Image>
        <img src={foto} alt={titulo} />
      </Image>
      <Title>
        <h1>{titulo}</h1>
      </Title>
      <Divider>
        <div className="divider" />
      </Divider>
      <Text>
        <p>{texto}</p>
      </Text>
    </CardsContainer>
  );
}

const CardsContainer = styled.section`
  width: 300px;
  border-radius: 4px;
  padding: 20px;
  display: flex;
  text-align: center;
  background: #181818;
  border-bottom: 3px solid #fff;
  color: white;
  margin: 15px;
  transition: transform 0.3s ease-in-out;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: scale(1.05);

    .divider {
      background-color: #fff !important;
    }
  }
`;

const Image = styled.div`
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin-bottom: 20px;
  }
`;

const Title = styled.div`
  h1 {
    font-family: Montserrat;
    text-shadow: 0 4px 4px #6000fa;

    font-size: 20px;
    font-weight: 600;
    margin: 10px 0;
  }
`;

const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  div {
    width: 80%;
    height: 1px;
    background-color: #fff !important;
  }
`;

const Text = styled.div`
  p {
    font-family: Montserrat;
    font-size: 14px;
    color: #aaa;
    text-align: justify;
    padding: 0 2em;
    position: relative;
  }
`;
