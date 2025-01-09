const Aluno = require('../models/index');

// Listar - read
const listar = async (requisicao, resposta) => {
    try {
     const novoAluno = Aluno.findAll();
     resposta.status(200).json(novoAluno); 
    } catch (error) {
     resposta.status(500).json({error:'Erro ao listar os alunos!'})  
    }
}



module.exports = { listar, } 
