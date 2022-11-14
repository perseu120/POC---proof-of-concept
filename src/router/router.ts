import { Router } from "express";
import filmeRouter from '../router/filmeRouter.js'


export const router = Router();

router.use(filmeRouter);
