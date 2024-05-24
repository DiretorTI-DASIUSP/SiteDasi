import Head from "next/head";
import Image from "next/image";
import Exemplo from "@/components/Exemplo";

export default function Home() {
  return (
    <>
      <Head>
        <title>DASI</title>
        <meta name="description" content="Website do Diretório Acadêmico de Sistemas de Informação"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Exemplo/>
      </main>
    </>
  );
}
