import React from "react";
import styled, {css} from "styled-components";

export default function App() {
    return (
        <>
            <SecaoDasi {...Props}/>
        </>
    )
}
function SecaoDasi({img, titulo, texto}) {
    const partesTitulo = titulo.split('DASI');
    return (
        <Container>
            <TextBox>
                <h1>
                    {partesTitulo[0]}
                    <StyleDasi>DASI </StyleDasi>
                    {partesTitulo[1]}
                </h1>
                <p>{texto}</p>
            </TextBox>
            <ImageBox>
                <img src={img} alt={titulo} />
            </ImageBox>
        </Container>
    );
}
const Props = {
    img: '/images/dasi-brasao.png',
    titulo: 'O que é o DASI?',
    texto: 'O Diretório Acadêmico de Sistemas de Informação (DASI) é uma entidade acadêmica de cunho universitário que representa os alunos do curso de SI da EACH-USP. A entidade busca melhorar a qualidade de vida do aluno durante sua graduação. Organizamos treinos de diversos esportes, grupos de estudos, mini-cursos, palestras, festas, campeonatos universitários a nível nacional, tudo através dos esforços dos nossos próprios integrantes.'
}
const flex = css`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const StyleDasi = styled.span`
    color: #9A4BFF;
    font-weight: 600;
`
const Container = styled.section`
    width: 85%;
    margin: 2rem auto;
    color: #fff;
    font-family: "Rubik", sans-serif;
    ${flex};
    @media(min-width: 1023px) { 
        width: 100%;
        flex-direction: row-reverse;
        margin: 10rem auto;
        padding: 0 1rem;
    }
    @media(min-width: 1270px) { padding: 0 4rem; }
`
const TextBox = styled.div`
    ${flex};
    text-align: center;
    @media(min-width: 1023px) { 
        text-align: start;
        width: 70%;
        padding: 2rem 0 2rem 5rem;
    }
    h1 {
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 2.69rem;
        width: 100%;
        @media(min-width: 760px) { font-size: 3rem; }
        @media(min-width: 1270px) { font-size: 4rem; }
    }
    p {
        text-align: justify;
        color: #D9D9D9;
        font-size: 1.5rem;
        font-weight: 300;
        margin-bottom: 2rem;
        @media(min-width: 1270px) { font-size: 1.7rem; }
    }
`
const ImageBox = styled.div`
    text-align: center;
    img {
        max-width: 57.64%;
        @media(min-width: 1023px) { 
            max-width: 100%;
        }
    }
`