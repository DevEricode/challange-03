import express from 'express';

import 'dotenv/config';

import { router } from './routes/router';


import DatabaseConnection from './database/database';
import errorMiddleware from './shared/middleware/errorMiddleware';
import fallbackMiddleware from './shared/middleware/notFoundMiddleware';



const db = new DatabaseConnection(process.env.URI!);

db.connect();

const server =  express();

server.use(express.json());

server.use(router);

server.use(errorMiddleware);
server.use(fallbackMiddleware);

export { server };