import Head from "next/head";
import Image from "next/image";
//import Exemplo from "@/components/Exemplo";
import Header from "@/components/Header";
import SecaoDasi from "@/components/SecaoDasi";
import Footer from "@/components/Footer";
import CardInfo from "@/components/CardInfo";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>DASI</title>
        <meta name="description" content="Website do Diretório Acadêmico de Sistemas de Informação" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* * * * * * *  FONTES * * * * * * */}
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />


      </Head>
      <main>
        {/* <Exemplo/> */}
        <Navigation />
        <Header />
        <SecaoDasi />
        <CardInfo />
        <Footer />
      </main>
    </>
  );
}
