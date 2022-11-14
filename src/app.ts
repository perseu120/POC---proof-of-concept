import cors from "cors";
import express, { Express, json } from 'express';
import dotenv from 'dotenv';
import {router} from '../src/router/router.js';
import 'express-async-errors';

dotenv.config();

const app = express();
app.use(json());
app.use(cors());


app.use(router);

export default app;