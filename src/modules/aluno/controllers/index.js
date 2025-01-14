const Aluno = require("../models/index");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')

dotenv.config()
//Login aluno 
const login = async (requisicao, resposta) => {
    try {
      const { email, senha } = requisicao.body;
      // fulano@email.com 12345678
      if(!email || !senha){
        return resposta.status(400).json({msg:"É obrigatorio fornecer o email e senha!"});
      }
      const aluno = await Aluno.findOne({where: email})
      if(!aluno){
        return resposta.status(401).json({msg:"Usuario não encontrado!"});
      }
      const senhaValida = await bcrypt.compare(senha, aluno.senha)
      if(!senhaValida){
        return resposta.status(401).json({msg:"Senha invalida!"});
      }
      const token = jwt.sign({ 
        id: aluno.id, 
        email: aluno.email 
      }, process.env.SECRET_KEY, 
      {expiresIn:"24h"} )
      resposta.status(200).json({msg:"Usuario autenticado!", token});
    } catch (error) {
      
    }
}

// Listar alunos - read
const listar = async (requisicao, resposta) => {
  try {
    const alunos = await Aluno.findAll();
    resposta.status(200).json(alunos);
  } catch (error) {
    resposta.status(500).json({ error: "Erro ao listar os alunos!", detalhes: error.message });
  }
};
// Cadastrar alunos - create
const criar = async (requisicao, resposta) => {
  try {
    const { nome, email, notas, senha } = requisicao.body;
    const novoAluno = await Aluno.create({ nome, email, notas, senha });
    resposta.status(201).json(novoAluno);
  } catch (error) {
    resposta.status(500).json({ error: "Erro ao cadastrar aluno!" , detalhes: error.message});
  }
};

const atualizar = async (requisicao, resposta) => {
  try {
    // localhost:3000/api/aluno/1
    const { id } = requisicao.params;
    const { nome, email, notas, senha } = requisicao.body;
    const aluno = await Aluno.findByPk(id);
    if (!aluno) {
      return resposta.status(404).json({ msg: "Usuario não encontrado!" });
    }
    await aluno.update({ nome, email, notas, senha });
    resposta.status(200).json(aluno);
  } catch (error) {
    resposta.status(500).json({ error: "Erro ao atualizar aluno!", detalhes: error.message });
  }
};

const deletar = async (requisicao, resposta) => {
  try {
    // localhost:3000/api/aluno/1
    const { id } = requisicao.params;
    const aluno = await Aluno.findByPk(id);
    if (!aluno) {
      return resposta.status(404).json({ msg: "Usuario não encontrado!" });
    }
    await aluno.destroy();
    resposta.status(200).json({ msg: "Usuario deletado com sucesso" });
  } catch (error) {
    resposta.status(500).json({ error: "Erro ao excluir aluno" , detalhes: error.message});
  }
};

const deletarTodos = async (requisicao, resposta) => {
  try {
    await Aluno.destroy({ where: {} });
    resposta.status(200).json({ msg: "Todos os alunos foram excluidos!" });
  } catch (error) {
    resposta.status(500).json({ error: "Erro ao excluir os alunos!" , detalhes: error.message});
  }
};

const listarPorId = async (requisicao, resposta) => {
  try {
    const { id } = requisicao.params;
    const aluno = await Aluno.findByPk(id);
    if (!aluno) {
      return resposta.status(404).json({ msg: "Usuario não encontrado!" });
    }
    resposta.status(200).json(aluno);
  } catch (error) {
    resposta.status(500).json({ error: "Erro ao deletar todos os usuarios" , detalhes: error.message});
  }
};

module.exports = { listar, criar, atualizar, deletar, deletarTodos, listarPorId };
