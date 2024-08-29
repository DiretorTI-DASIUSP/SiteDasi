import React from 'react';
import styled from 'styled-components';
import CardSetores from '../CardSetores/CardSetores';

export default function SecaoSetores() {
  return (
    <Container>
      <Background>
        <ContainerMainTitle>
          <MainTitle>
            <h1>CONHEÇA NOSSOS <span>SETORES</span></h1>
          </MainTitle>
        </ContainerMainTitle>

        <ContainerSubTitle>
          <SubTitle>
            <h2>No <span>DASI</span> você vai encontrar o setor que mais combina com você!</h2>
          </SubTitle>
        </ContainerSubTitle>

        <CardsWrapper>
          <CardSetores foto="img_academico" titulo="Acadêmico" texto="Lorem ipsum is simply dummy text of the printing and typesetti..." />
          <CardSetores foto="img_ti" titulo="TI" texto="Lorem ipsum is simply dummy text of the printing and typesetti..." />
          <CardSetores foto="img_eventos" titulo="Eventos" texto="Lorem ipsum is simply dummy text of the printing and typesetti..." />
          <CardSetores foto="img_esportivo" titulo="Esportivo" texto="Lorem ipsum is simply dummy text of the printing and typesetti..." />
          <CardSetores foto="img_gestao" titulo="Gestão de Pessoas" texto="Lorem ipsum is simply dummy text of the printing and typesetti..." />
          <CardSetores foto="img_administração" titulo="Administração" texto="Lorem ipsum is simply dummy text of the printing and typesetti..." />
          <CardSetores foto="img_patrimonio" titulo="Patrimônio" texto="Lorem ipsum is simply dummy text of the printing and typesetti..." />
          
        </CardsWrapper>
      </Background>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: rgb(86, 0, 197);
  background-size: cover;
  color: white;
  text-align: center;
  padding: 20px;
  align-items: stretch;
`;

const Background = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.div`
  h1 {
    font-family: Montserrat;
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 78.02px;
    text-align: center;
    filter: drop-shadow(0px 4px 0px #00000040);
  }

  span {
    font-family: Montserrat;
    font-size: 3.5rem;
    font-weight: 600;
    line-height: 78.02px;
    text-align: center;
  }

  @media (max-width: 1200px) {
    h1, span {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 992px) {
    h1, span {
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    h1, span {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 576px) {
    h1, span {
      font-size: 1.5rem;
    }
  }
`;

const SubTitle = styled.div`
  h2 {
    font-family: 'Montserrat';
    font-size: 1.8rem;
    font-weight: 100;
    line-height: 43.88px;
    text-align: center;
    filter: drop-shadow(0px 4px 0px #00000040);
  }

  span {
    font-family: Montserrat;
    font-size: 27px;
    font-weight: 600;
    line-height: 43.88px;
    text-align: center;
  }

  @media (max-width: 1200px) {
    h2, span {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    h2, span {
      font-size: 1.156rem;;
    }
  }

  @media (max-width: 576px) {
    h2, span {
      font-size: 1.2rem;
    }
  }
`;

const ContainerMainTitle = styled.div``;

const ContainerSubTitle = styled.div`
  width: 100%;
  height: 88px;
  max-width: 580px;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  max-width: 70rem;
  filter: drop-shadow(0px 2px 1px #FFFFFF);
`;