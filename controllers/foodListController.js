const { Food } = require('../models')

class FoodListController {
  static showFoodList(req,res) {
    Food.findAll()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static addFoodPage(req, res) {}

  static addFoodPost(req, res) {}

  static editFoodPage(req, res) {}

  static editFoodPost(req, res) {}

  static deleteFood(req, res) {}
}

module.exports = FoodListController;