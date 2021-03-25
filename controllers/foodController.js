const { Food } = require('../models')

class ControllerFoodList {
  static showFoodList(req,res) {
    Food.findAll()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = ControllerFoodList;