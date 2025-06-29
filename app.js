require('dotenv').config();
const express = require('express');
const expressSession = require('express-session');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('./generated/prisma');
const indexRouter = require('./routes/indexRouter');
const passport = require('passport');
const authRouter = require('./routes/authRouter')
const appRouter = require('./routes/appRouter')
const path = require('path');
const shareRouter = require('./routes/shareRouter');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(
  expressSession({
    cookie: {
      maxAge: 24 * 60 * 60 * 1000
    },
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(
      new PrismaClient(),
      {
        checkPeriod: 2 * 60 * 1000,
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined,
      }
    )
  }),
)

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/auth', authRouter);
app.use('/app', appRouter);

app.use('/share', shareRouter);

app.use('/', (req, res, next) => {
  res.render('404-page')
})
app.listen(PORT, () => {
  console.log(`The app is live on port - ${PORT}`)
})