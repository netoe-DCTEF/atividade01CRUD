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
    usuario.foto_perfil = req.file.filename;
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
function open_edit(req,res)
{
    UsuarioModel.findById(req.params.id).then((usuario)=>{
        res.render('usuario/edit.ejs',{usuario:usuario});
    });
    
}
function edit_user(req,res)
{
    UsuarioModel.findByIdAndUpdate(req.params.id,
        {
            nome:req.body.nome,
            email:req.body.email,
            cpf:req.body.cpf,
            ie:req.body.ie,
            endereco:req.body.endereco,
            uf:req.body.uf,
            cidade:req.body.cidade,
            ddd:req.body.ddd,
            telefone:req.body.telefone,
            foto_perfil:req.file.filename,
            dataCarimbo:req.body.dataCarimbo,
            horaCarimbo:req.body.horaCarimbo
        },

        function (err,result){
            if(err){
                res.send('\nError: ' + err);
            }
            else{
                res.redirect('/usuario/list');
            }
        }
    );
}
function delete_user(req,res){
    UsuarioModel.findByIdAndDelete(req.params.id).then(()=>{
        res.redirect('/usuario/list');
    });
}
function mostrarPedido(req,res){
    UsuarioModel.findById(req.params.id).then((usuario)=>{
        res.render('usuario/clienteImprimir/clienteImprimir.ejs',{usuario:usuario});
    });
}

module.exports = {open_add,add,list,list_filter,open_edit,edit_user,delete_user,mostrarPedido};
