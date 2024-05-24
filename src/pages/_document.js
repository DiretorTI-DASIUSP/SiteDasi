import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta property = "og:title" content="DASI"/>
        <meta property = "og:type" content="website"/>
        <meta property = "og:image" content = "https://github.com/dasiusp/assets/blob/master/arts/letreiro-logo.png?raw=true"/>
        <meta property = "og:description" content = "O grandioso website do DASI! Desenvolvido puramente pelos integrantes do setor de TI do Diretório Acadêmico de Sistemas de Informação"/>      
        <meta property = "og:image:width" content = "200"/>
        <meta property="og:image:heigth" content = "100"/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
