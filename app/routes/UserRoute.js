var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var userController = require('../controllers/UserController');

router.post('/', userController.createUser);

router.get('/', userController.getUser);

module.exports = router;