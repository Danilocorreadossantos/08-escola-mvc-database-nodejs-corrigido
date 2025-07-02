const bancoDados = require("../config/banco-dados")

async function listarTodosCursos(){
      
    
    //Abrir uma conexao com o banco de dados
      const conexao = await bancoDados.conexao
      
      
      //executar a consulta do select no banco de dados
      //desestruturaçao do resultado da consulta
      const [ cursos ] = await conexao.execute("SELECT * FROM cursos")
      
      //contar a quantidade de cursos retornados
      console.log("quantidade de cursos", cursos [0].legth)
      
      
      //Retornar os cursos
      cursos[0]
}

module.exports ={
    listarTodosCursos
}