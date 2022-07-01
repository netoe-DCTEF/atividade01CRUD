const express = require('express');
const router = express.router();
const controller = require('../controller/UsuarioController.js');

/*HTTPS:GET*/ 
router.get('/add',controller.abreadd);
router.get('/list',controller.list);
router.get('/delete_user/id:',controller.delete_user);
router.get('/edit',controller.abreadd);

/*HTTPS:POST*/ 

router.post('/add',controller.add);
router.post('/list',controller.list_filter);
router.post("/edit/id:",controller.edit_user);



module.exports = router;

