const moongoose = require('mongoose');
const database = require('../config/conectionMongoDB.js');

    const UsuarioSchema = database.Schema({
        nome:{type:"String"},
        email:{type:"String"},
        cpf:{type:"String"},
        ie:{type:"String"},
        endereco:{type:"String"},
        uf:{type:"String"},
        cidade:{type:"String"},
        ddd:{type:"String"},
        telefone:{type:"String"},
        foto_perfil:{type:"String"},
        dataCarimbo:{type:"String"},
        horaCarimbo:{type:"String"}
    });

module.exports = database.model("Cliente",UsuarioSchema);







