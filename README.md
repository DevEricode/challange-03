<p align="center">
  <img src="https://cdn.pluo.jobs/media/logos/2021-11-05_19-02_logo.png" alt="Logo Compasso UOL" width="200">
</p>


# Desafio Compass - Programa de Bolsas Backend com Node.js.

## Sobre o Projeto:

O terceiro desafio do programa de bolsas da Compass visa aplicar os conhecimentos adquiridos durante três meses de formação em Backend com Node.js. O projeto abrange conceitos fundamentais do mundo backend, como:

* Endpoints.
* Controllers.
* Banco de dados NoSQL.
* Controle de usuário com e-mail e senha.
* Criptografia de senha.
* Login de usuários.
* Geração e utilização de tokens JWT.
* Validação minuciosa de dados nas entradas dos endpoints.
* Paginação de consultas.
* Filtros de consultas.
* Testes de código para garantir qualidade das entregas
* Boas práticas de código, incluindo conceitos do clean code.

## Tecnologias Utilizadas:

* [NodeJS](https://nodejs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [ExpressJS](https://www.expresjs.org/)
* [Mongoose ODM](https://mongoosejs.com/)
* [Jest](https://jestjs.io/docs/getting-started)
* [Swagger](https://swagger.io/docs/)
* [ESlint](https://eslint.org/)
* [Prettier](https://prettier.io/)

## Dependências do Projeto:

    "bcrypt": "^5.1.1",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-async-errors": "^3.1.1",
    "http-status-code": "^2.1.0",
    "joi": "^17.11.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.0.3"
    "@types/bcrypt": "^5.0.2",
    "@types/express": "^4.17.21",
    "@types/http-status-codes": "^1.2.0",
    "@types/joi": "^17.2.3",
    "@types/jsonwebtoken": "^9.0.5",
    "@types/mongoose": "^5.11.97",
    "@types/node": "^20.10.5",
    "@types/supertest": "^6.0.1",
    "@typescript-eslint/eslint-plugin": "^6.16.0",
    "@typescript-eslint/parser": "^6.16.0",
    "eslint": "^8.56.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.1.2",
    "jest": "^29.7.0",
    "prettier": "^3.1.1",
    "supertest": "^6.3.3",
    "ts-jest": "^29.1.1",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.3.3"

## Rotas Utilizadas:

### Users

| Método   | Rota                      |
|----------|---------------------------|
| POST     | /api/v1/users/sign-in     |
| POST     | /api/v1/users/sign-up     |

#### Events

| Método   | Rota                      |
|----------|---------------------------|
| POST     | /api/v1/events/           |
| GET      | /api/v1/events/           |
| GET      | /api/v1/events/:id        |
| DELETE   | /api/v1/events/           |
| DELETE   | /api/v1/events/:id        |

## Scripts Utilizados:

    "start": "ts-node-dev ./src/index.ts",
    "production": "node ./build/index.js",
    "test": "jest",
    "format": "prettier --write .",
    "lint": "eslint . --ext .ts",
    "lint:fix": "eslint . --ext .ts --fix",
    "lint:watch": "eslint . --ext .ts --fix --watch"

## Como Rodar:

Para executar o projeto, é necessário ter o Node.js instalado no computador. Para instalá-lo, basta clicar no link abaixo.

* [Clique aqui](https://nodejs.org/)

### Instalação do Yarn:

A instalação do Yarn é feita por meio do NPM.

    npm install -g yarn

### Clonar o Repositório:

    git clone <https://github.com/DevEricode/challange-03.git>

### Instalar as Dependências:

    cd challange-03
    yarn install

### Configurar as Variáveis de Ambiente:

Crie o arquivo .env na pasta raiz do projeto e insira o seguinte conteúdo:

    PORT=8000
    URI=Senha_do_banco_de_dados
    DB_NAME1=Nome1
    DB_COLLECTION1=Nome1
    DB_NAME2=Nome2
    DB_COLLECTION2=Nome2
    SECRET=Sua_string_qualquer

### Rodar o Projeto:

    yarn start

### Rodar os Testes:

    yarn test