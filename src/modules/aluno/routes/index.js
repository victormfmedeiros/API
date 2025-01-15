const express = require('express')
const route_aluno = express.Router();

// importando o controller
const {  criar, atualizar, deletar, listarPorId, login} = require('../controllers/index')


// Listar os alunos por id
// http://localhost:3001/aluno/1
route_aluno.get('/perfil',login, listarPorId);

// Atualizar o aluno por id
// http://localhost:3001/aluno/editar/1
route_aluno.put('/perfil/:id',login, atualizar);

// Cadastrar aluno
// http://localhost:3001/aluno/cadastrar
route_aluno.post('/cadastrar', criar);

// Deletar aluno especifico
// http://localhost:3001/aluno/deletar/1
route_aluno.delete('/deletar/:id',login, deletar);

// Login aluno
// http://localhost:3001/api/aluno/login
route_aluno.post('/login', login);

module.exports = route_aluno;