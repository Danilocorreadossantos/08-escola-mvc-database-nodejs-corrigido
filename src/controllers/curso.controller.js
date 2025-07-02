// Importar o model de cursos
const cursoModel = require("../models/curso.model")

async function listar(request, response) {
  // Chamar a função listarTodosCursos do model
  const cursos = await cursoModel.listarTodosCursos()

  console.log(cursos)
  
  //response.json(cursos);

  //Renderizar a view listar-cursos
  response.render('listar-cursos',{ cursos })
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