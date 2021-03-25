const router = require('express').Router()
const RegisterController = require('../controllers/registerController')
const LoginController = require('../controllers/loginController')

router.get('/signup', RegisterController.registerPage);
router.post('/signup', RegisterController.registerPost);
router.get('/login', LoginController.loginPage);
router.post('/login', LoginController.loginPost);
router.get('/logout', LoginController.logout);

module.exports = router