const express = require('express')
const autenticar = require("../../../middleware/autenticar")
const route_aluno = express.Router();

// importando o controller
const {  criar, atualizarPerfil, deletarPerfil, listarPerfil, login} = require('../controllers/index')


// Listar os alunos por id
// http://localhost:3001/api/aluno/perfil
route_aluno.get('/perfil',autenticar, listarPerfil);

// Atualizar o aluno por id
// http://localhost:3001/api/aluno/perfil
route_aluno.put('/perfil',autenticar, atualizarPerfil);

// Cadastrar aluno
// http://localhost:3001/aluno/cadastrar
route_aluno.post('/cadastrar', criar);

// Deletar aluno especifico
// http://localhost:3001/api/aluno/perfil
route_aluno.delete('/perfil',autenticar, deletarPerfil);

// Login aluno
// http://localhost:3001/api/aluno/login
route_aluno.post('/login', login);

module.exports = route_aluno;