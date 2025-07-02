//importando arquivo de configuraçao do banco de dados
const bancoDados = require("../config/banco-dados")


async function listar(request, response) {
  //Listar cursos do banco de dados
  const conexao = await bancoDados.conexao
  const [ cursos ] = await conexao.execute("SELECT * FROM cursos")
  response.json(cursos)

  console.log('cursos', cursos)
}

function criar(request, response) {
  response.send("Função responsável por criar um curso")
}

function atualizar(request, response) {
  response.send("Função responsável por atualizar um curso")
}

function deletar(request, response) {
  response.send("Função responsável por deletar um curso")
}

module.exports = {
  listar,
  criar,
  atualizar,
  deletar
}

