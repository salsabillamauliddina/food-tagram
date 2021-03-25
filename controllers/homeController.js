class HomeController {
  static showHomeHandler(req, res) {
    let msg = req.query;
        console.log(msg)
        res.render('home', { msg })
  }
}

module.exports = HomeController