<h1 align="center">Bem vindos ao website do DASI!</h1>

<div align = "center">
<img src = "https://img.shields.io/badge/HTML-551cb8?style=for-the-badge&logo=html5&logoColor=white"/>
<img src = "https://img.shields.io/badge/CSS-551cb8?&style=for-the-badge&logo=css3&logoColor=white"/>
<img src = "https://img.shields.io/badge/JavaScript-551cb8?style=for-the-badge&logo=javascript&logoColor=white"/>
<img src = "https://img.shields.io/badge/React-551cb8?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src = "https://img.shields.io/badge/styled--components-551cb8?style=for-the-badge&logo=styled-components&logoColor=white"/>
</div>

## ⚙️ Configuração do Ambiente

Antes de começar a produzir, verifique se você possui todas as dependências instaladas na sua máquina para que você consiga produzir sem dor de cabeça. Veja aqui o que será necessário:
<details>
  <summary><strong>Node.js & NPM</strong></summary>
    <p>  Uma versão do node >= 16 já será o suficiente para rodar o projeto, mas recomenda-se estar com a versão mais atualizada no node para permitir que implementações futuras não entrem em conflito com a versão em sua máquina.</p>

  #### LINUX 
  <img src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTd6NmxhcXY1dHZlNTFrNm9tNXM2b2M4cWFmMndmNnZnd3FtOG9vOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QLag0hPew7yVRyncTv/giphy.gif"/>

  #### WINDOWS
  Basta ir ao site do ![Node](https://nodejs.org/en/download) e baixar a versão **LTS** (Long-term support).
</details>

> [!NOTE]
> O resto das dependências são todas instaladas **apenas** no ambiente de desenvolvimento.

## 🤝 Como Contribuir
Aqui constam as instruções para você fazer parte da criação deste belíssimo site:

1. Escolha uma task para fazer, elas estão disponíveis em nosso **ClickUp**. Caso você ainda não tenha acesso, entre em contato com o diretor responsável pelo desenvolvimento do site.
   
2. Clone este repositório remoto em sua máquina, em seu **terminal** digite:
   ```bash
   git clone https://github.com/DiretorTI-DASIUSP/SiteDasi.git
   
   cd SiteDASI/

   npm install
   ```
   
3. Lembre-se de criar uma **branch** para a sua task. Exemplo: headerFoto
   ```
   git checkout -b headerFoto
   ```
4. Após terminar sua task, basta mandar suas modificações locais para este repositório remoto:
   ```bash
   git add .

   git commit -m "feat: adicionei um negócio bem legal hein"

   git push origin headerFoto
   ```
   
5. Por fim, basta vir aqui no **Github** e pedir uma **Pull Request**. Vamos analisar seu código e te dar um feedback!


> [!WARNING]
> Lembre-se de realizar um ```git fetch``` sempre que for começar algo, assim não haverá conflito na hora do ```git push```.
