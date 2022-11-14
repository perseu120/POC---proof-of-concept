import pg from 'pg';

const {Pool} = pg;

export const connection = new Pool({
    connectionString: 'postgres://postgres:masterkey@localhost:5432/filmes',
    ssl: {
      rejectUnauthorized: false,
    },
  });

