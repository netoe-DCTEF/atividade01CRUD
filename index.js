const express = require('express');
const path = require('path');
const usuario_router = require('./routes/UsuarioRoutes.js');
const app = express();
const porta = 3000;


app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({ extends: true }));
app.use('/usuario',usuario_router);

app.get('/',(req,res)=>{
    res.render(__dirname + '/index.ejs');
});
app.listen(3000,()=>{
    console.log("\nRODANDO APP NA PORTA: " + porta);
});






