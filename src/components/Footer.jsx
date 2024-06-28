import styled from "styled-components";


export default function Footer() {
    return (
        <TextosFooter>
            <h1>Contato</h1><hr></hr>               {/* Organizei o código em 3 divisões, TextosFooter: que tem os textos e as linhas em baixo dos textos  */}
            <p>Rua Arlindo Béttio, 1000</p>             {/* Imagens: onde estão as imagens. E por fim MsgDireitos: Que foi excluisavamente para a mensagem no fim da pagina. */}
            <p>São Paulo - SP, 03828-000</p>
            <p>CNPJ - 12.598.380/0001-97</p>
            <h2>Termos</h2><hr></hr>
            <p>Código de conduta</p>
            <h2>Redes Sociais</h2><hr id="TamanhoLinhaRedes"></hr>

            <Imagens>
                <img src="/images/instagram-logo-thin.svg" />
                <img src="/images/linkedin-logo-thin.svg" />
            </Imagens>

            <MsgDireitos>
                <p> 2024 © Todos os Direitos Reservados.</p>
            </MsgDireitos>


        </TextosFooter>
    )
}

const TextosFooter = styled.div`
    width: 390px;
    height: 844px;                                      {/* Estilos Relacionados aos Textos, h1, h2, p, hr, e também o ultimo hr, o das redes sociais, pois ele é diferente dos demais */}
    background-color: #5600c5;
    font-family: Arial;
    
    
    
    h1 {
        margin-left: 30px;
        padding-top: 50px;
        font-size: 40px;
        color: white;
        
    }

      h2 {
        margin-left: 30px;
        padding-top: 90px;
        font-size: 40px;
        color: white;
    }

    p{

    margin-left: 30px;
        padding-top: 15px;
        font-size: 22px;
        color: white;
        line-height: 40px;
    
    
    }

    hr{ margin-left:30px;
    margin-right:275px;
    
    }

    #TamanhoLinhaRedes { margin-left:30px;
    margin-right:288px;
  
    }

   
    
    
`;

const Imagens = styled.div`

    display: flex;                              {/* Estilos relacionados a imagens, usei displayflex para organizar as 2 imagens. */}
    flex-direction: row;
    gap: 40px;
    margin-left: 25px;
    padding-top: 30px;
    img{ width: 70px;


`;

const MsgDireitos = styled.div`
 


p{
text-align: center;
padding-top:90px;                                   {/* Estilos relacionados a MsgDireitos, para melhor leitura/execução do código */}
font-size:15px;
}



`;

