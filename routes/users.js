var express = require('express');
var router = express.Router();
const controller = require('../controller/users');
const jwt = require('express-jwt');
const response = require('../lib/response_handler');





/* GET users listing. */
router.post('/login', controller.login)
      .post('/register', controller.register)
module.exports = router;


