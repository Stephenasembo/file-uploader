const passport = require('../config/passport')
const service = require('../queries/user')
const passwordUtil = require('../utils/passwordUtil')

module.exports = {
  getIndex: (req, res, next) => {
    res.render('index')
  },
  getSignUpForm: (req, res, next) => {
    res.render('sign-up')
  },
  getLoginForm: (req, res, next) => {
    res.render('login')
  },
  createUser: async (req, res, next) => {
    const { username, password } = req.body;
    const hashedPassword = await passwordUtil.hashPassword(password);
    await service.createUser(username, hashedPassword);
    res.send('Account created')
  },
  loginUser: passport.authenticate('local', {
    successRedirect: '/app',
    failureRedirect: '/login',
  }),
  getHomepage: (req, res, next) => {
    res.render('homepage')
  }
}