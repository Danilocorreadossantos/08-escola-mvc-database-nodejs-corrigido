function listar(request, response) {
  response.send("Função responsável pela listagem de alunos")
}

function criar(request, response) {
  response.send("Função responsável por criar um aluno")
}

function atualizar(request, response) {
  response.send("Função responsável por atualizar um aluno")
}

function deletar(request, response) {
  response.send("Função responsável por deletar um aluno")
}

module.exports = {
  listar,
  criar,
  atualizar,
  deletar
}