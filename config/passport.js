const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs')
const service = require('../queries/user')
const passwordUtil = require('../utils/passwordUtil')

const strategy = async (username, password, done) => {
  const user = await service.findUser(null, username);
  if(!user) {
    return done(null, false, { message: 'Username not found' })
  }
  if(!passwordUtil.verifyPassword) {
    return done(null, false, { message: 'Incorrect password' });
  }
  done(null, user);
}

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser(async (userId, done) => {
  const user = await service.findUser(userId);
  done(null, user)
})

passport.use(new LocalStrategy(strategy));

module.exports = passport;