import styled from "styled-components";

export default function Footer() {
  return (
    <TextosFooter>
      <Block>
        <Title>
          <h1>Contato</h1>
          <hr></hr>
        </Title>{" "}
        {/* Organizei o código em divisões, TextosFooter: que tem os textos e as linhas em baixo dos textos  */}
        <p>Rua Arlindo Béttio, 1000</p>
        {/* Imagens: onde estão as imagens. E por fim MsgDireitos: Que foi excluisavamente para a mensagem no fim da pagina. */}
        <p>São Paulo - SP, 03828-000</p>
        <p>CNPJ - 12.598.380/0001-97</p>
      </Block>

      {/* Criei a div Block(blocos), para aplicar facilmente o displayflex, para a responsividade,                                                    separei os títulos pela div Title para além de poupar código, separar o 
      título e o hr do paragrafo abaixo de forma simples, de forma que o hr e o h1,h2 se torne "1"  */}
     
     <Block>
        <Title>
          <h1>Termos</h1>
          <hr></hr>
        </Title>
        <p>Código de conduta</p>
      </Block>

      <Block>
        <Title>
          <h1>Redes Sociais</h1>
          <hr></hr>
        </Title>

        <Imagens>
          <img src="/images/logotipo-do-instagram.png" />
          <img src="/images/logotipo-do-linkedin.png" />
        </Imagens>
      </Block>

      <MsgDireitos>
        <p> 2024 © Todos os direitos reservados.</p>
      </MsgDireitos>
    </TextosFooter>
  );
}

//Aqui na "div" Tittle, vou personalizar o h1,h2 e o hr
const Title = styled.div`
  h1 {
    font-size: 2rem;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
  }

  hr {
    width: 30%;
    height: .35em;
    background-color: white;
  }
`

//Aqui na "div" Block, vou separar o código entre essas block's para poder fazer o displayflex facilmente.
//Também possui o media screen para 768px para centralizar os blocks.

const Block = styled.div`

    display: flex; 
    flex-direction:column; 
    
    gap: 1.5em;

    p{
    font-size: 1.4rem;
    color: white;
    font-family: "Montserrat", sans-serif; 
    }

    @media screen and (min-width: 768px){
      align-items: left;
    }

    @media screen and (min-width: 1024px){
      p {
        font-size: 1.6rem;
      }
    }


`
//No TextosFooter eu fiz toda a estilização geral dessa página, mudando a altura nas resoluções etc.
const TextosFooter = styled.div`

    width: 100%;
    padding: 4em 2em;                                     
    background-color: #5600C5;
    position:relative;
    display:flex;
    flex-direction:column;
    gap: 4em;

    @media screen and (min-width: 1024px){
      flex-direction:row;
      justify-content: space-evenly;     
      text-align: left;
      padding: 5em 10em 10em;
    }        
`;

const Imagens = styled.div`

  display: flex;  
  /* Estilos relacionados a imagens, usei displayflex para organizar as 2 imagens. */
  flex-direction: row;
  gap: 2em;

  img {
    width: 2.5em;
  }

  @media screen and (min-width: 1024px){
    img{
      width: 3em;
    }
  }
`;

//Aqui estilizei a mensagem de direitos, organizando seu tamanho e posição nas diferentes resoluções.
const MsgDireitos = styled.div`

  p {
    /* Estilos relacionados a MsgDireitos, para melhor leitura/execução do código */
    text-align: center;
    font-size: 1.2rem;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
  }

  @media screen and (min-width: 1024px){
    position: absolute;
    width: calc(100% - 10em); // 100% - padding horizontal
    bottom: 2.5em;
    p {
      font-size: 1.6rem;
    }
  }
`;
