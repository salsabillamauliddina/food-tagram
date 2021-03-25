const sendMail = require('../helpers/nodemailer')
const { User } = require('../models')


class ControllerSignUp {
    static signUpPage(req, res) {
        res.render('signup')
    }

    static signUpPost(req, res) {
        let { first_name, last_name, username, password, email, birth_date } = req.body

        User.create({ first_name, last_name, username, password, email, birth_date })
        .then(data => {
            sendMail(data.email)
            let msg = 'Thank you for signing up!'
            res.redirect(`/?msg=${msg}`)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static userListAdminOnly(req, res) {
        res.send('here')
    }

}

module.exports = ControllerSignUp;