import { Request, Response } from "express";
import Filme from "../protocols/typeFilmes.js";
import { filmeService } from "../service/filmeService.js";

export async function getFilme(req: Request, res:Response){
    const filme = await filmeService.getFilmes() as Filme;
    
    // res.send(filme).status(200);
    return res.send(filme).status(200);
}

export async function addFilme(req: Request, res:Response){
    const filme: Filme = req.body
    
    filmeService.insertFilme(filme);
    
    return res.sendStatus(201);
}

export async function updateFilme(req:Request, res: Response) {

    const {id} = req.params;

    const filme: Filme = req.body

    filmeService.updateFilme(Number(id), filme);

    return res.sendStatus(202);
    
}
export async function deleteFilme(req:Request, res: Response) {

    const {id} = req.params;

    filmeService.deleteFilme(Number(id));

    return res.sendStatus(202);
    
}
export async function totalFilmes(req:Request, res: Response) {

    const total = await filmeService.totalFilmes();

    return res.send(total).status(200);
    
}