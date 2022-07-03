const express = require('express');
const router = express.Router();
const controller = require('../controller/UsuarioController');

/*HTTPS:GET*/ 
router.get('/add',controller.open_add);
router.get('/list',controller.list);
router.get('/delete_user/id:',controller.delete_user);
router.get('/edit',controller.open_edit);

/*HTTPS:POST*/ 

router.post('/add',controller.add);
router.post('/list',controller.list_filter);
router.post("/edit/id:",controller.edit);



module.exports = router;

