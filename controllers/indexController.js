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
  createUser: (req, res, next) => {
    res.send('Account created')
  },
  loginUser: (req, res, next) => {
    res.send('User logged in')
  },
}