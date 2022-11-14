import Filme from '../protocols/typeFilmes.js';
import { connection } from './../database/db.js';

async function allFilme(){
    const filmes = await connection.query<Filme>(`SELECT * from filmes`);
    
    return filmes.rows;
}

async function insertFilme(nome:string, plataforma:string, genero:string, status: string){
    await connection.query(`INSERT INTO filmes(
        nome, plataforma, genero, status)
        VALUES ($1, $2, $3, $4);`,[nome, plataforma, genero, status]);
}

async function updateFilme(id:number, nome:string, plataforma:string, genero:string, status: string) {
    await connection.query(`UPDATE filmes
	SET  nome=$1, plataforma=$2, genero=$3, status=$4
	WHERE id = $5;`, [nome, plataforma, genero, status, id]);
}

async function deleteFilme(id:number) {
    await connection.query(`DELETE FROM filmes
	WHERE id = $1;`, [id])
}
async function totalFilmes() {
    const total = await connection.query(`SELECT COUNT(id) as total FROM filmes`)

    return total.rows[0].total as number;
}


export const repositoryFilmes = {
    allFilme,
    insertFilme,
    updateFilme,
    deleteFilme,
    totalFilmes
}