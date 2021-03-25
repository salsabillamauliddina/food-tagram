const router = require('express').Router()
const RegisterController = require('../controllers/registerController')
const LoginController = require('../controllers/loginController')

router.get('/register', RegisterController.registerPage);
router.post('/register', RegisterController.registerPost);
router.get('/login', LoginController.loginPage);
router.post('/login', LoginController.loginPost);
router.get('/logout', LoginController.logout);

module.exports = router