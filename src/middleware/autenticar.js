const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();


const autenticar = (req,res,proximo) => {
    const token = req.headers.authorization?.split(" ")[1]
    if(!token){
        return res.status(401).json({msg: "Acesso não autorizado"})
    }
    try {
        const aluno = jwt.verify(token, process.env.SECRET_KEY)
        if(!aluno){
            return res.status(401).json({msg: "Token inválido"})
        }
        req.aluno = aluno;
        proximo()
    }
    catch (error) {
        res.status(401).json({msg: "Erro ao autenticar aluno", detalhes:error.menssage})
    }
}

module.exports = autenticar