const express = require('express');
const UsuarioModel = require('../model/UsuarioModel.js');

function open_add(req,res){
    res.render("/views/usuario/add.ejs");
}
function add(req,res){
}
function list(req,res){}
function list_filter(req,res){}
function open_edit(req,res){}
function edit(req,res){}
function delete_user(req,res){}


module.exports(open_add,add,list,list_filter,open_edit,edit,delete_user);
