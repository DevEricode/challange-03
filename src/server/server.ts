import express from 'express';

import 'dotenv/config';

import { router } from './routes/router';

import DatabaseConnection from './database/database';

const db = new DatabaseConnection(process.env.URI!);

db.connect();

const server =  express();

server.use(express.json());

server.use(router);

export { server };