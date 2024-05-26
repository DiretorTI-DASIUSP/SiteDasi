import styled from "styled-components";

export default function Exemplo(){
    return (
        <ExemploWrapper>
            <h1>Este é um componente exemplo</h1>
        </ExemploWrapper>
    )
}

const ExemploWrapper = styled.div`
    border: 1px solid red;
    h1{
        color: blue;
    }
`