const router = require('express').Router()
const FoodListController = require('../controllers/foodListController')

router.get('/foodlist', FoodListController.showFoodList);
router.get('/foodlist/add', FoodListController.addFoodPage);
router.post('/foodlist/add', FoodListController.addFoodPost);
router.get('/foodlist/:id/edit', FoodListController.editFoodPage);
router.post('/foodlist/:id/edit', FoodListController.editFoodPost);
router.get('/foodlist/:id/delete', FoodListController.deleteFood);

module.exports = router