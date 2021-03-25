const sendMail = require('../helpers/nodemailer')
const { User } = require('../models/index')

class RegisterController {
  static registerPage(req, res) {
    res.render('registerpage')
  }

  static registerPost(req, res) {
    let { first_name, last_name, username, password, email, birth_date } = req.body

        User.create({ first_name, last_name, username, password, email, birth_date })
        .then(data => {
          // console.log(data, 'uqw9r08q23u');
          sendMail(data.email)
          let msg = 'Thank you for signing up!'
          res.redirect(`/?msg=${msg}`)
        })
        .catch(err => {
          console.log(err, 'errr');
            res.send(err)
        })
  }
}

module.exports = RegisterController