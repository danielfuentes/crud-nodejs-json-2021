const express = require('express');
const router = express.Router();
const path = require('path');

const controllersUser = require(path.resolve(__dirname, '..', 'controllers', 'controllersUser'));

router.get('/registro', controllersUser.registro);
router.get('/login', controllersUser.login);

module.exports = router;