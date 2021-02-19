# ToDo API

Este é um projeto feito para a criação de uma API ToDo, feito para que você tenha um serviço de gerenciamneto de tarefas.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **Implantação** para saber como implantar o projeto.

### 📋 Pré-requisitos

Para a execução desse projeto você deverá ter os seguintes componentes:

* Node.js instalado em sua máquina

* Uma conta no serviço Atlas do MongoDB

### 🔧 Instalação

Para que o seu ambiente de desenvolvimento esteja em funcionamento, usaremos o NPM para a instalação das bibliotecas e demais funções.

Assim que o repositorio for criado localmente, vá no terminal da pasta do projeto e execute o **NPM init**, para dar inicio ao projeto.

Após o NPM init, 3 arquivos serão criados e começaremos a instalar as dependencias do projeto.

Para instalar as dependencias do projeto você usará o comando **npm install <dependencia> --save**.

As seguintes dependencias que deverão ser instaladas são o Express, Body-parser, Cors e Mongoose.

E como dependencia de desenvolvimento é recomendável a utilização do Nodemon, utilizando o comando **npm install nodemon --save-dev**

## 📦 Desenvolvimento

Durante o desenvolvimento da aplicação, é recomendável estar com o nodemon ativo, rodando pelo script de start.

Para configurar o script de start, vá até o arquivo package.json e do campo **Scripts** adicione o comando **"start": "nodemon server.js"** e para começar a roda o nodemon, de o comando **npm start** no terminal.

## 🛠️ Construído com

* [Express](https://expressjs.com/pt-br/) - O framework web usado
* [Body-Parser](https://www.npmjs.com/package/body-parser) - Midlleware utilizado na aplicação
* [Cors](https://www.npmjs.com/package/cors) - Utilizado para que a API seja acessada remotamente via Web
* [Mongoose](https://mongoosejs.com/) - Utilizado para a criação dos Schemas da database
