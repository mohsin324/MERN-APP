const express = require('express');
const router = express.Router();
// user controller 
const { signUp, logIn } = require('../controller/user-controller');


// user controller
router.route('/signup').post(signUp);
router.route('/login').post(logIn);

module.exports = router
