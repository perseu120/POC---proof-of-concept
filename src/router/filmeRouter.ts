import { Router} from "express";
import {addFilme, getFilme, updateFilme, deleteFilme, totalFilmes} from "../controller/filmeController.js";

const filmeRouter = Router();

filmeRouter.get('/filme', getFilme)//adicionar a função controladora para retornar filmes
filmeRouter.post('/filme', addFilme)//add função controladora para adicionar filmes
filmeRouter.put('/filme/:id', updateFilme)//adicionar função controladora que atualiza um filme pelo id
filmeRouter.delete('/filme/:id', deleteFilme)//adicionar função que deleta pelo id 
filmeRouter.get('/filme/total', totalFilmes)//adicionar função que deleta pelo id 

export default filmeRouter;