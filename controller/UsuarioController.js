const UsuarioModel = require('../model/UsuarioModel.js');

function open_add(req,res){
    res.render("usuario/add.ejs");  
}
function add(req,res){    
    let data = new Date();
    let dataCompleta = data.getDate() + '/'+ data.getMonth() + '/' + data.getFullYear();
    let horaCompleta  = data.getHours() + ':' + data.getMinutes() + ':' + data.getMilliseconds();

    var usuario = new UsuarioModel();  
    
    usuario.nome = req.body.nome;
    usuario.email = req.body.email;
    usuario.cpf = req.body.cpf;
    usuario.ie = req.body.ie;
    usuario.endereco = req.body.endereco;
    usuario.uf = req.body.uf;
    usuario.cidade = req.body.cidade;
    usuario.ddd = req.body.ddd;
    usuario.telefone = req.body.telefone;
    usuario.foto_perfil = req.body.foto_perfil;
    usuario.dataCarimbo = dataCompleta;
    usuario.horaCarimbo = horaCompleta;

    usuario.save((err,result)=>{
        if(err){
            res.send("Error: " + err);
        }
        else{
            res.redirect('/usuario/list');
        }
    });
[]
}
function list(req,res){
    UsuarioModel.find({}).then((usuario) =>{
        res.render('../views/usuario/list.ejs',{UsuarioModel:usuario});
    });
}
function list_filter(req,res)
{

}
function open_edit(req,res){}
function edit(req,res){}
function delete_user(req,res){}


module.exports = {open_add,add,list,list_filter,open_edit,edit,delete_user};
