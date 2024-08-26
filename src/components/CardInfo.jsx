import styled from "styled-components";

export default function CardInfo(){
    return (
        <CardDiv>

            <Block>
                    <img src="/images/grupo.png" />
                    <SubBlock>
                        <h1>70</h1>
                        <h2>Membros</h2>
                        <h2> Atuais</h2>
                    </SubBlock>
            </Block>

            <Block>
                    <img src="/images/pessoas.png" />
                    <SubBlock>
                        <h1>700</h1>
                        <h2>Membros</h2>
                        <h2> Totais</h2>
                    </SubBlock>
            </Block>

            <Block>
                    <img src="/images/gerente.png" />
                    <SubBlock>
                        <h1>10</h1>
                        <h2>Diretores</h2>  
                    </SubBlock>
            </Block>

        </CardDiv>
    )
}

const CardDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#181818;
    gap:4rem;
    padding:3rem;

    @media screen and (min-width: 1024px){
        display:flex;
        flex-direction: row;
        gap:4rem;
        
    
    }

 @media screen and (min-width: 1200px){
        display:flex;
        flex-direction: row;
        gap:10rem;
        
    
    }


    @media screen and (min-width: 1400px){
        display:flex;
        flex-direction: row;
        gap:15rem;
        
    
    }

    @media screen and (min-width: 1600px){
        display:flex;
        flex-direction: row;
        gap:14rem;
    }

    @media screen and (min-width: 1800px){
        display:flex;
        flex-direction: row;
        gap:20rem;
        
    
    }

     @media screen and (min-width: 2000px){
        display:flex;
        flex-direction: row;
        gap:25rem;
        
    
    }
    
`

const Block = styled.div`

    display:flex;
    flex-direction: row;
    align-items: center;
    gap:5rem;


    img {   
        width:6rem;
        height:6rem;
        }

    @media screen and (min-width: 1600px){
        img {   
        width:9rem;
        height:9rem;
            }
        
    
    }
`

const SubBlock = styled.div`
    
    display:flex;
    flex-direction: column;
    align-items:center;

    h1{
        color: #6000FA;
        font-family: Oswald;
        font-weight: 500;
        font-size: 4rem;
    }

    h2{
        color: #FFFFFF;
        font-family: Montserrat;
        font-size: 1.5rem;
        font-weight: 400;
    } 

    @media screen and (min-width: 1600px){
           
    h1{
        font-size:5rem;}

    h2{
        font-size: 2rem;}
        
    
    }

`
