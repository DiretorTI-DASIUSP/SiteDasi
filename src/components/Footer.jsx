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
        <p>Rua Arlindo Béttio, 1000</p>{" "}
        {/* Imagens: onde estão as imagens. E por fim MsgDireitos: Que foi excluisavamente para a mensagem no fim da pagina. */}
        <p>São Paulo - SP, 03828-000</p>
        <p>CNPJ - 12.598.380/0001-97</p>
      </Block>
      {/* Criei a div Block(blocos), para aplicar facilmente o displayflex, para a responsividade, 
                                                                     separei os títulos pela div Title para além de poupar código, separar o 
                                                                     título e o hr do paragrafo abaixo de forma simples, de forma que o hr e o h1,h2 se torne "1"  */}
      <Block>
        <Title>
          <h2>Termos</h2>
          <hr></hr>
        </Title>
        <p>Código de conduta</p>
      </Block>

      <Block>
        <Title>
          <h2>Redes Sociais</h2>
          <hr id="TamanhoLinhaRedes"></hr>
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
    font-size: 35px;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 35px;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
  }

  hr {
    width: 100px;
    height: 3px;
    background-color: white;
  }

  #TamanhoLinhaRedes {
    width: 90px;
  }
`;
//Aqui na "div" Block, vou separar o código entre essas block's para poder fazer o displayflex facilmente.
//Também possui o media screen para 768px para centralizar os blocks.

const Block = styled.div`

display: flex; 
flex-direction:column; 
margin-left: 30px; 
gap:30px;

p{
  
  font-size: 22px;
  color: white;
  font-family: "Montserrat", sans-serif; {/* Fonte momentânea que utilizei, pois a Rubik não estava dadno certo */}
  font-weight: 300;}

  @media screen and (min-width: 1024px){

margin-left:0px;
}

 @media screen and (min-width: 768px){



 align-items: center;
 margin-left:0px;




`;
//No TextosFooter eu fiz toda a estilização geral dessa página, mudando a altura nas resoluções etc.
const TextosFooter = styled.div`


@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');


    width: 100%;
    height: 844px;                                      
    background-color: #5600C5;
    position:relative;
    display:flex;
    flex-direction:column;
    gap:90px;
    padding-top:50px;


    @media screen and (min-width: 1024px){

    flex-direction:row;
    height:334px;
    justify-content:space-evenly;

    
  

 }
  





 
    
}

  

  
    
    
        
    
   

    


   
    
    
`;

const Imagens = styled.div`
  display: flex;
   {
    /* Estilos relacionados a imagens, usei displayflex para organizar as 2 imagens. */
  }
  flex-direction: row;
  gap: 40px;

  img {
    width: 45px;
  }
`;
//Aqui estilizei a mensagem de direitos, organizando seu tamanho e posição nas diferentes resoluções.
const MsgDireitos = styled.div`
  position: absolute;
  bottom: 35px;
  width: 100%;

  p {
    text-align: center;
     {
      /* Estilos relacionados a MsgDireitos, para melhor leitura/execução do código */
    }
    font-size: 15px;
    color: white;
    line-height: 25px;
    font-family: "Montserrat", sans-serif;
     {
      /* Fonte momentânea que utilizei, pois a Rubik não estava dando certo */
    }
    font-weight: 300;
  }

  @media screen and (min-width: 768px) {
    bottom: 4px;
  }

  @media screen and (min-width: 1024px) {
    bottom: 10px;
    p {
      font-size: 17px;
    }
  }
`;
