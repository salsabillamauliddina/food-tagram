const express = require('express');
const router = express.Router();
const ControllerMyFood = require('../controllers/controllerMyFood')

router.get('/myfood', ControllerMyFood.showAllList)
router.get('/myfood/add', ControllerMyFood.addPage)
router.post('/myfood/add', ControllerMyFood.addPost)

module.exports = router;