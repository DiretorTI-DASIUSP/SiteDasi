import React from "react";
import styled from "styled-components";
import CardSetores from "./CardSetores";

const textos = {
  // arrumar esse texto
  academico:
    "O setor acadêmico é responsável por agregar na graduação dos alunos através de palestras, visitas técnicas e a Semana de Estágio. E claro, todos esses com muitos coffee breaks! Também ajudamos a sociedade, dando aulas de programação para alunos de escolas públicas!",
  ti: "O setor de T.I é o responsável pela criação de sites e bots para o Dasi, auxiliando e automatizando os fluxos de trabalho do Dasi. Além disso, o setor de T.I é responsável por manter a infraestrutura de servidores e sistemas do Dasi.",
  eventos:
    "O setor de eventos da EACH organiza as festas mais icônicas do campus. No primeiro semestre, temos o PancaDasi com seu boom de óculos Juliet; no segundo, a Glow brilha com estética neon e Open Beats. Fazer parte dessa produção é criar momentos únicos e memoráveis!",
  esportivo:
    "O setor esportivo é responsável por organizar eventos esportivos para os alunos do curso, como o intercomp e o interSI, e por gerir as equipes existentes. Dessa forma, incentivamos a prática de esportes e proporcionamos momentos de descontração entre os estudantes do curso",
  gp: "O setor de Gestão de Pessoas ajuda a manter o bem-estar de todos os membros do DASI. Criando atividades que fortalecem a nossa união e interação. Auxiliamos os membros que entram e que saem na sua nova jornada.",
  adm: "O setor do DASI responsável por criar os produtos do curso e a comunicação visual em peças físicas e digitais. Utilizando de muita criatividade e colaboração dos membros com sugestões e elementos a serem implementados no produto ou peça de comunicação",
  patrimonio:
    "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  criacao:
    "O setor responsável por criar os produtos do curso e a comunicação visual em peças físicas e digitais. Utilizando de muita criatividade e colaboração dos membros com sugestões e elementos a serem implementados no produto ou peça de comunicação",
};

export default function SecaoSetores() {
  return (
    <Container id="setores">
      <Background>
        <ContainerMainTitle>
          <MainTitle>
            <h1>
              CONHEÇA NOSSOS <span>SETORES</span>
            </h1>
          </MainTitle>
        </ContainerMainTitle>

        <ContainerSubTitle>
          <SubTitle>
            <h2>
              No <span>DASI</span> você vai encontrar o setor que mais combina
              com você!
            </h2>
          </SubTitle>
        </ContainerSubTitle>

        <CardsWrapper>
          <CardSetores
            foto="/images/academico.png"
            titulo="Acadêmico"
            texto={textos.academico}
          />
          <CardSetores foto="/images/ti.png" titulo="TI" texto={textos.ti} />
          <CardSetores
            foto="/images/eventos.png"
            titulo="Eventos"
            texto={textos.eventos}
          />
          <CardSetores
            foto="/images/esportivo.png"
            titulo="Esportivo"
            texto={textos.esportivo}
          />
          <CardSetores
            foto="/images/gp.png"
            titulo="Gestão de Pessoas"
            texto={textos.gp}
          />
          <CardSetores
            foto="/images/adm.png"
            titulo="Criação"
            texto={textos.criacao}
          />
          <CardSetores
            foto="/images/patrimonio.png"
            titulo="Patrimônio"
            texto={textos.patrimonio}
          />
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

const SubTitle = styled.div`
  h2 {
    font-family: "Montserrat";
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
