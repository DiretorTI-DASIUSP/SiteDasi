import React from "react";
import styled, { css } from "styled-components";

export default function SecaoDasi() {
  return (
    <Container>
      <TextBox>
        <h1>
          O que é o <StyleDasi> DASI </StyleDasi>?
        </h1>
        <p>
          O Diretório Acadêmico de Sistemas de Informação (DASI) é uma entidade
          acadêmica de cunho universitário que representa os alunos do curso de
          SI da EACH-USP. A entidade busca melhorar a qualidade de vida do aluno
          durante sua graduação. Organizamos treinos de diversos esportes,
          grupos de estudos, mini-cursos, palestras, festas, campeonatos
          universitários a nível nacional, tudo através dos esforços dos nossos
          próprios integrantes.
        </p>
      </TextBox>
      <ImageBox>
        <img src="/images/dasi-brasao.png" alt={"Brasão do DASI"} />
      </ImageBox>
    </Container>
  );
}

const flex = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const StyleDasi = styled.span`
  color: #9a4bff;
  font-weight: 600;
`;
const Container = styled.section`
  width: 85%;
  margin: 2rem auto;
  color: #fff;
  font-family: "Rubik", sans-serif;
  ${flex};
  @media (min-width: 1023px) {
    width: 100%;
    flex-direction: row-reverse;
    margin: 10rem auto;
    padding: 0 1rem;
  }
  @media (min-width: 1270px) {
    padding: 0 4rem;
  }
`;
const TextBox = styled.div`
  ${flex};
  text-align: center;
  @media (min-width: 1023px) {
    text-align: start;
    width: 70%;
    padding: 2rem;
  }
  h1 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 2rem;
    width: 100%;
    @media (min-width: 760px) {
      font-size: 3rem;
    }
    @media (min-width: 1270px) {
      font-size: 3rem;
    }
  }
  p {
    text-align: justify;
    color: #d9d9d9;
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 2rem;
    line-height: 1.5em;
    @media (min-width: 1270px) {
      font-size: 1.4rem;
    }
  }
`;
const ImageBox = styled.div`
  text-align: center;
  img {
    max-width: 70%;

    @media (min-width: 1023px) {
      max-width: 75%;
    }
  }
`;
