const express = require('express');
const router = express.Router();
const  authController = require('../../controller/web/authController');
const { loginValidation, signupValidation } = require('../../validation/authValidation');
const validate = require('../../middleware/validate');

// Define your routes here
router.post('/login',validate(loginValidation), authController.login)
router.post('/signup',validate(signupValidation), authController.signup)

// Correct export syntax for CommonJS
module.exports = router;
