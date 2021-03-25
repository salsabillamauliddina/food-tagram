const { User } = require('../models/index')
const { comparePassword } = require('../helpers/bycrypt')

class LoginController {
  static loginPage(req, res) {
    res.render('loginpage')
  }

  static loginPost(req, res) {
    let obj = {
      email: req.body.email,
      password: req.body.password
    }
    User.findOne({
      where: {
        email: req.body.email
      }
    })
    .then(data => {
      const correctPassword = comparePassword(req.body.password, data.password)

      if (data && comparePassword) {
        req.session.userId = {
          id : user.id,
          first_name : user.first_name,
          last_name : user.last_name
      }
      res.redirect('/')
      } else {
        res.redirect('/failed?message=Invalid email/password')
      }
    })
    .catch(err => {
      res.send(err)
    })
  }

  static logout(req, res) {
    req.session.destroy(err => {
      if (err) {
        res.redirect()
      }
    })
  }
}

module.exports = LoginController