const express = require('express');
const path = require('path');
const usuario_router = require('./routes/UsuarioRoutes.js');
const app = express();
const porta = 3000;


app.set('view engine','ejs');
app.set(express.static(path.join('public')));
app.use('/usuario',usuario_router);


app.listen(3000,()=>{
    console.log("\nRODANDO APP NA PORTA: " + porta);
});






