# Gerenciamento de Alunos e Professores API

Este projeto é uma API RESTful construída com **Node.js**, **Express** e **Sequelize** para gerenciar alunos e professores. Ele inclui funcionalidades para listar, criar, atualizar e deletar registros no banco de dados.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Runtime JavaScript.
- **Express**: Framework web para Node.js.
- **Sequelize**: ORM para interagir com o banco de dados.
- **MySQL** (ou outro banco compatível com Sequelize): Armazenamento de dados.

## 📂 Estrutura do Projeto

```
src/
├── aluno/
│   ├── controllers/
│   │   └── index.js # Controladores relacionados aos alunos
│   ├── models/
│   │   └── index.js # Modelo Sequelize do Aluno
│   ├── routes/
│   └── index.js # Rotas relacionadas aos alunos
├── professor/
│   ├── controllers/
│   │   └── index.js # Controladores relacionados aos professores
│   ├── models/
│   │   └── index.js # Modelo Sequelize do Professor
│   ├── routes/
│   └── index.js # Rotas relacionadas aos professores
├── config/
│   └── configDb.js # Configuração do banco de dados
app.js # Arquivo principal do servidor
```

## 📄 Endpoints da API

### Rotas de Alunos (`/api/aluno`)

| Método  | Rota                     | Descrição                            |
|---------|--------------------------|--------------------------------------|
| `GET`   | `/`                      | Lista todos os alunos.              |
| `GET`   | `/:id`                   | Lista aluno por ID.                 |
| `POST`  | `/cadastrar`             | Cadastra um novo aluno.             |
| `PUT`   | `/editar/:id`            | Atualiza informações do aluno.      |
| `DELETE`| `/deletar/:id`           | Deleta um aluno por ID.             |
| `DELETE`| `/deletar`               | Deleta todos os alunos.             |

### Rotas de Professores (`/api/professor`)

Similar às rotas de alunos, mas focadas em professores.

## 🛠 Configuração do Ambiente

1. Clone o repositório:
    ```bash
    git clone https://github.com/seuusuario/nomedorepositorio.git
    cd nomedorepositorio
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Configure o banco de dados:

    Crie um arquivo `.env` com as variáveis de ambiente necessárias (exemplo abaixo):
    ```makefile
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_NAME=nome_do_banco
    ```
4. Inicie o servidor:
    ```bash
    npm start
    ```
    Acesse a API em [http://localhost:3001](http://localhost:3001).

## 🧪 Exemplos de Testes

Use ferramentas como Postman, Insomnia ou cURL para testar os endpoints.

Exemplo de requisição para listar alunos:
```bash
curl -X GET http://localhost:3001/api/aluno/
```

## 🔧 Recursos Implementados

- Conexão com banco de dados via Sequelize.
- Endpoints para CRUD de alunos e professores.
- Tratamento básico de erros e validações.

## 🤝 Contribuições

1. Faça um fork do projeto.
2. Crie uma nova branch:
    ```bash
    git checkout -b feature-minha-mudanca
    ```
3. Commit suas alterações:
    ```bash
    git commit -m "Minha nova feature"
    ```
4. Envie suas mudanças:
    ```bash
    git push origin feature-minha-mudanca
    ```
5. Crie um Pull Request.

## 📝 Licença

Este projeto está sob a licença MIT.

Feito com ❤️ por Seu Nome

Substitua `https://github.com/seuusuario/nomedorepositorio` e outros campos personalizáveis por informações reais do seu projeto.




















































































































