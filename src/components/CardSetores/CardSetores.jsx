import React from 'react';
import styled from 'styled-components';

export default function CardSetores({ foto, titulo, texto }) {
  return (
    <CardsContainer>
      <Image>
        <img src={foto} alt={titulo} />
      </Image>
      <Title>
        <h1>{titulo}</h1>
      </Title>
      <Divider />
      <Text>
        <p>{texto}</p>
      </Text>
    </CardsContainer>
  );
}

const CardsContainer = styled.section`
    width: 250px;
    height: 230px;
    border-radius: 4px;
    padding: 20px;
    display: flex;
    text-align: center;
    background: #181818;
    color: white;
    margin: 15px;
    transition: transform 0.3s ease-in-out;
    flex-direction: column;
    justify-content: center;

  &:hover {
    transform: scale(1.05);
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
    font-size: 20px;
    font-weight: 600;
    margin: 10px 0;
  }
`;

const Divider = styled.div`
  margin: 10px 0;
  border: none;
  border-top: 1px solid #ffffff30;
`;

const Text = styled.div`
  p {
    font-size: 14px;
    color: #aaa;
  }
`;