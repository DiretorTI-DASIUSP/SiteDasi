"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DepoimentoCard from "./DepoimentoCard";
import DepoimentoTi from "../depoimentos/ti.json";
import DepoimentoAcademico from "../depoimentos/academico.json";
import DepoimentoEventos from "../depoimentos/eventos.json";
import DepoimentoEsportivo from "../depoimentos/esportivo.json";
import DepoimentoGp from "../depoimentos/gp.json";
import DepoimentoAdm from "../depoimentos/adm.json";
import DepoimentoPatrimonio from "../depoimentos/patrimonio.json";
import BtnPrimary from "./Btn/BtnPrimary";

export default function SecaoDepoimentos() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 671 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 670, min: 0 },
      items: 1,
    },
  };

  const [categoria, setCategoria] = useState("ti");
  const [depoimentos, setDepoimentos] = useState(DepoimentoTi);

  useEffect(() => {
    switch (categoria) {
      case "ti":
        setDepoimentos(DepoimentoTi);
        break;
      case "academico":
        setDepoimentos(DepoimentoAcademico);
        break;
      case "eventos":
        setDepoimentos(DepoimentoEventos);
        break;
      case "esportivo":
        setDepoimentos(DepoimentoEsportivo);
        break;
      case "gp":
        setDepoimentos(DepoimentoGp);
        break;
      case "adm":
        setDepoimentos(DepoimentoAdm);
        break;
      case "patrimonio":
        setDepoimentos(DepoimentoPatrimonio);
        break;
      default:
        setDepoimentos(DepoimentoTi);
    }
  }, [categoria]);

  return (
    <Container id="depoimentos">
      <ContainerMainTitle>
        <MainTitle>
          <h1>
            <span>DEPOIMENTOS</span>
          </h1>
        </MainTitle>
      </ContainerMainTitle>

      <ContainerSubTitle>
        <SubTitle>
          <h2>
            Confira como foi a experiências dos membros que fizeram parte desta
            incrível entidade!
          </h2>
        </SubTitle>
      </ContainerSubTitle>
      <Carousel
        responsive={responsive}
        className="carrosel"
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
      >
        {depoimentos?.map((depoimento) => (
          <div key={depoimento.nome}>
            <DepoimentoCard
              nome={depoimento.nome}
              foto={depoimento.foto}
              depoimento={depoimento.depoimento}
            />
          </div>
        ))}
      </Carousel>
      <ButtonsStack>
        <div>
          <BtnPrimary
            texto="Acadêmico"
            handleClick={() => setCategoria("academico")}
            className="doIt item"
          />
          <BtnPrimary
            texto="TI"
            handleClick={() => setCategoria("ti")}
            className="doIt item"
          />
          <BtnPrimary
            texto="Eventos"
            handleClick={() => setCategoria("eventos")}
            className="doIt item"
          />
          <BtnPrimary
            texto="Esportivo"
            handleClick={() => setCategoria("esportivo")}
            className="doIt item"
          />
          <BtnPrimary
            texto="Gestão de Pessoas"
            handleClick={() => setCategoria("gp")}
            className="doIt item"
          />
          <BtnPrimary
            texto="Administração"
            handleClick={() => setCategoria("adm")}
            className="doIt item"
          />
          <BtnPrimary
            texto="Patrimônio"
            handleClick={() => setCategoria("patrimonio")}
            className="doIt item"
          />
        </div>
      </ButtonsStack>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: #181818;

  .carrosel {
    width: 100%;
  }

  .carrosel div {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 464px) {
    .carrosel div {
      justify-content: center;
    }
  }
`;

const ButtonsStack = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
  padding-top: 2em;
  padding-bottom: 2em;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    margin-top: 2em;

    .item {
      flex: 1 1 calc(25% - 1em); /* 25% menos a margem para ter 4 itens por linha */
      max-width: calc(25% - 1em);
      box-sizing: border-box;
    }

    @media (max-width: 768px) {
      padding: 2rem;
      .item {
        flex: 1 1 calc(50% - 1em); /* 50% menos a margem para ter 2 itens por linha em telas menores */
        max-width: calc(50% - 1em);
      }
    }

    @media (max-width: 480px) {
      .item {
        flex: 1 1 calc(50% - 1em); /* 50% menos a margem para ter 2 itens por linha em telas menores */
        max-width: calc(50% - 1em);
      }
    }

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
  }
`;
const ContainerMainTitle = styled.div``;

const MainTitle = styled.div`
  h1 {
    font-family: Montserrat;
    color: white;
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
    h1,
    span {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 992px) {
    h1,
    span {
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    h1,
    span {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 576px) {
    h1,
    span {
      font-size: 1.5rem;
    }
  }
`;

const ContainerSubTitle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  aliign-items: center;
`;

const SubTitle = styled.div`
  max-width: 820px;

  h2 {
    font-family: "Montserrat";
    color: white;
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
    h2,
    span {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    h2,
    span {
      font-size: 1.156rem;
    }
  }

  @media (max-width: 576px) {
    h2,
    span {
      font-size: 1.2rem;
    }
  }
`;
