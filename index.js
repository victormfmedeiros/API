const express = require('express')
const route_aluno = require('./src/aluno/routes/index')
const route_professor = require('./src/professor/routes/index')
const app = express()
const port = 3001

// importando as rotas
app.use('/api/aluno', route_aluno)
app.use('/api/professor', route_professor)

app.listen(port, async () => {
  console.log(`Servidor rodando na porta ${port}!`);
});
