const passport = require('../config/passport')
const service = require('../queries/user')
const passwordUtil = require('../utils/passwordUtil')

module.exports = {
  getSignUpForm: (req, res, next) => {
    res.render('sign-up')
  },
  getLoginForm: (req, res, next) => {
    res.render('login')
  },
  createUser: async (req, res, next) => {
    const { username, password } = req.body;
    const hashedPassword = await passwordUtil.hashPassword(password);
    const user = await service.createUser(username, hashedPassword);
    req.login(user, (err) => {
      if (err) return next(err)
      return res.redirect('/app')
    })
  },
  loginUser: passport.authenticate('local', {
    successRedirect: '/app',
    failureRedirect: '/login',
  }),
  logoutUser: (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err)
      req.session.destroy((err) => {
        if (err) return next(err)
        res.redirect('/auth/login')
      })
    })
  }
}