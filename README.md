

<h3 align="center">
  Proof of concept ✅
</h3>

<br />

# Visão geral

Aplicação feita um CRUD simples para se familiariza com o TypeScript.


# Como usar

## FilmeRouter



### GET(/filme)

```js
//retorna um array de objetos contendo todos os filmes do banco

[
  {
    "id": 4,
    "nome": "exemplo",
    "plataforma": "exemplo flix",
    "genero": "heroi",
    "status": "concluido"
  },
  {
    "id": 5,
    "nome": "exemplo",
    "plataforma": "exemplo plus",
    "genero": "heroi",
    "status": "assistindo"
  }
]
```

### POST(/filme)

```js

//é feito um post para a rota / filmes passando um body de filme para adicionar um filme ao banco de dados

body = {
  "nome": "a vida é bela",
  "plataforma": "amazom",
  "genero": "romantico",
  "status": "assistindo"
}

```

### PUT(/filme/:id)

```js
//é feito um Put na rota de filme passando um ID para conseguir atualizar um registo tambem deve ser passado um body com os dados a ser atualizados

body = {
  "nome": "novo dado",
  "plataforma": "novo dado",
  "genero": "novo dado",
  "status": "Novo dados"
}
```

### DELETE(/filme/:id)

```js
// ao fazer um delete nessa rota passando um ID ele deleta o registo no banco de dados que tenha o id correspondente não é nessario passa nada alem do ID

```

### GET(/filme/total)

```js
//retorna um Number que é referente a quantidade de filmes cadastradas no banco de dados

```