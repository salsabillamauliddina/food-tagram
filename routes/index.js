const router = require('express').Router()
const homeRoute = require('./home-route')
const authRoute = require('./auth-router')
const failedRoute = require('./failed-route')
const foodListRoute = require('./food-list-router')
const myFoodRoute = require('./my-food-router')

router.use(homeRoute)
router.use(authRoute)
router.use(failedRoute)
router.use(foodListRoute)
router.use(myFoodRoute)

module.exports = router