const express = require('express')

const route_aluno = express.Router();

// http://localhost:3000/
route_aluno.get('/',  );
  
  // http://localhost:3000/aluno
route_aluno.get('/cadastro', (requisao, resposta) => {
      resposta.send('Rota de aluno')
})

module.exports = route_aluno;