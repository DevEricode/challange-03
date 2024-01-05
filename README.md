<p align="center">
  <img src="https://cdn.pluo.jobs/media/logos/2021-11-05_19-02_logo.png" alt="Compasso UOL Logo" width="200">
</p>

# Compass Challenge - Backend Scholarship Program with Node.js.

## About the Project:

The third challenge of Compass's scholarship program aims to apply the knowledge acquired during three months of Backend training with Node.js. The project covers fundamental backend concepts such as:

* Endpoints.
* Controllers.
* NoSQL Database.
* User control with email and password.
* Password encryption.
* User login.
* JWT token generation and usage.
* Thorough data validation in endpoint inputs.
* Query pagination.
* Query filters.
* Error handling.
* Custom errors.
* Code testing to ensure delivery quality.
* Code best practices, including clean code concepts.

## Used Technologies:

* [NodeJS](https://nodejs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [ExpressJS](https://www.expresjs.org/)
* [Mongoose ODM](https://mongoosejs.com/)
* [Jest](https://jestjs.io/docs/getting-started)
* [Swagger](https://swagger.io/docs/)
* [ESlint](https://eslint.org/)
* [Prettier](https://prettier.io/)

## Project Dependencies:

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

## Used Routes:

### Users

| Method   | Route                   | Functionality    |
|----------|-------------------------|------------------|
| POST     | /api/v1/users/sign-in   | Log In.          |
| POST     | /api/v1/users/sign-up   | Create a user.   |

### Events

| Method   | Route                    | Functionality                      |
|----------|--------------------------|------------------------------------|
| POST     | /api/v1/events/          | Create a event.                    |
| GET      | /api/v1/events/          | Get an event by day of the week.   |
| GET      | /api/v1/events/:id       | Get an event by id.                |
| DELETE   | /api/v1/events/          | Delete an event by day of the week.|
| DELETE   | /api/v1/events/:id       | Delete an event by id.             |


## Used Scripts:

    "start": "ts-node-dev ./src/index.ts",
    "production": "node ./build/index.js",
    "test": "jest",
    "format": "prettier --write .",
    "lint": "eslint . --ext .ts",
    "lint:fix": "eslint . --ext .ts --fix",
    "lint:watch": "eslint . --ext .ts --fix --watch"

## How to Run:

To run the project, it is necessary to have Node.js installed on the computer. To install it, just click on the link below.

* [Click here](https://nodejs.org/)

### Yarn Installation:

Yarn installation is done through NPM.

    npm install -g yarn

### Clone the Repository:

    git clone <https://github.com/DevEricode/challange-03.git>

### Install Dependencies:

    cd challange-03
    yarn install

### Set Environment Variables:

Create the .env file in the project's root folder and insert the following content:

    PORT=8000
    URI=Database_password
    DB_NAME1=Name1
    DB_COLLECTION1=Name1
    DB_NAME2=Name2
    DB_COLLECTION2=Name2
    SECRET=Your_random_string

### Run the Project:

    yarn start

### Run Tests:

    yarn test