import React from 'react'

/**
 Essa é a página inicial do site, no next, a pagina com o nome "page",
 vai ser iniciada por padrão, sendo assim, ela será a página inicial do site.
 */

export default function Inicio() {
  return (
    <div className='container-page'>
      <main>
        <h1>Titulo</h1>
        <p>Olá, bem-vindo ao meu site</p>
      </main>

      <footer>Esse daqui é o footer</footer>
    </div>
  )
}
