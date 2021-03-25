const router = require('express').Router()

router.get('/failed', (req, res) => {
  let errormsg = req.query;
  res.render('failed', { errormsg })
});

module.exports = router