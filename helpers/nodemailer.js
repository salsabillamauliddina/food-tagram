const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'kofivanilla@gmail.com', // generated ethereal user
    pass: 'Allahuakbar12', // generated ethereal password
  },
});

const sendMail = (email) => {
  const option = {
    from: '"food-tagram" <rama.exvius@gmail.com>',
    to: email,
    subject: "Thanks for registering on food-tagram",
    text: "You can share your memories here!!"
  }

  transporter.sendMail(option, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log('email has been successfully sent!');
    }
  })
}

module.exports = sendMail