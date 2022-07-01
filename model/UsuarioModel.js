const moongoose = require('mongoose');
const database = require('../config/conectionMongoDB.js');

const UsuarioSchema = conexao.Schema({
    nome:{type:"String"},
    email:{type:"String"},
    cpf:{type:"String"},
    ie:{type:"String"},
    endereco:{type:"String"},
    ddd:{type:"String"},
    telefone:{type:"String"},
    foto_perfil:{type:"String"},
    carimbo:{type:"Date"}
});

module.exports = conexao.model("Cliente",UsuarioSchema);







