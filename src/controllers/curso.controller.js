//importar o model de cursos
const cursoModel = require("../models/curso.model")

async function listar (request, responde) {
  // chamar a funçao listarTodosCursos do model
  const cursos = await cursoModel.listarTodosCursos()

  responde.json(cursos)
}

async function listar(request, response) {
  //Listar cursos do banco de dados
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

