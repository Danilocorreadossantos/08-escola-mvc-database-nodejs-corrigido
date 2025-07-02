// Importando o módulo do express
const express = require('express')

// Importação dos controllers
const cursoController = require('./controllers/curso.controller')
const alunoController = require('./controllers/aluno.controller');
const professorController = require('./controllers/professor.controller');

// Criando uma instância do express
const app = express()

//Configurar o ejs template engine
app.set("view engine", "ejs")

//configurar a pasta das views
app.set("views", "./src/views")


// Cursos
app.get('/cursos', cursoController.listar);
app.post('/cursos', cursoController.criar);
app.delete('/cursos/:id', cursoController.deletar);
app.put('/cursos/:id', cursoController.atualizar);

// Rota Alunos
app.get('/alunos', alunoController.listar);
app.post('/alunos', alunoController.criar);
app.delete('/alunos/:id', alunoController.deletar);
app.put('/alunos/:id', alunoController.atualizar);

// Professores
app.get('/professores', professorController.listar);
app.post('/professores', professorController.criar);
app.delete('/professores/:id', professorController.deletar);
app.put('/professores/:id', professorController.atualizar);


// Iniciando o servidor na porta 3000
app.listen(3001, function() {
  console.log("Servidor rodando na porta 3000")
})