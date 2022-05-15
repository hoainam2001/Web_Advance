var express = require('express');
var router = express.Router();
const db = require('../models/db')
const userController = require('../controllers/UserController')

/* GET users listing. */
router.get('/', userController.index);

module.exports = router;
