const express = require('express');
const app = express();
const porta = 3000;


app.set('view engine','ejs');
app.set(express.static(path.join('public')));



app.listen(3000,()=>{
    console.log("\nRODANDO APP NA PORTA: " + porta);
});






