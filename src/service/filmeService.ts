import { NOMEM } from 'dns';
import Filme from '../protocols/typeFilmes';
import {repositoryFilmes} from '../repository/repositoryFilmes.js'

async function getFilmes() {
    const filmes = await repositoryFilmes.allFilme() as Filme;

    return filmes;
}

async function insertFilme(filme:Filme) {

    const {
        nome,
        plataforma,
        genero,
        status
    } = filme;

    repositoryFilmes.insertFilme(nome, plataforma, genero, status)
    
}
async function updateFilme(id:number, filme:Filme) {

    const {
        nome,
        plataforma,
        genero,
        status
    } = filme;

    repositoryFilmes.updateFilme(id, nome, plataforma, genero, status)
    
}
async function deleteFilme(id:number) {

    repositoryFilmes.deleteFilme(id)
    
}

async function totalFilmes() {

    return await repositoryFilmes.totalFilmes()
    
}

export const filmeService = {
    getFilmes,
    insertFilme,
    updateFilme,
    deleteFilme,
    totalFilmes
}

