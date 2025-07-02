function listar(request, response) {
  response.send("Função responsável pela listagem de professores")
}

function criar(request, response) {
  response.send("Função responsável por criar um professor")
}

function atualizar(request, response) {
  response.send("Função responsável por atualizar um professor")
}


function deletar(request, response) {
  response.send("Função responsável por deletar um professor")
}

module.exports = {
  listar,
  criar,
  atualizar,
  deletar
}