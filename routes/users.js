const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usariosController');


/* GET users listing. */
router.get('/', usuariosController.index);

module.exports = router;
