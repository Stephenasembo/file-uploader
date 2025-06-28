const passport = require('../config/passport')
const service = require('../queries/user')
const passwordUtil = require('../utils/passwordUtil')

module.exports = {
  getSignUpForm: (req, res, next) => {
    res.render('sign-up')
  },
  getLoginForm: (req, res, next) => {
    let error;
    console.log(req.session.messages)
    if(req.session.messages) {
      const loginError = req.session.messages[0]
      if (loginError === 'Username not found') {
        error = 'username'
        req.session.messages = []
      } else if(loginError === 'Incorrect password') {
        error = 'password'
        req.session.messages = []
      }
    }
    res.render('login', { error })
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
    failureRedirect: '/auth/login',
    failureMessage: true,
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