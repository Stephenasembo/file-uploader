const authorizeUser = require("../middleware/authorizeUser");

module.exports = {
  getHomepage: [authorizeUser, (req, res, next) => {
    res.render('homepage')
  }]
}