const router = require('express').Router()
const MyFoodController = require('../controllers/myFoodController')

router.get('/myfoodliv8', MyFoodController.showAllList)
router.get('/myfoodliv8/add', MyFoodController.addPage)
router.post('/myfoodliv8/add', MyFoodController.addPost)

module.exports = router