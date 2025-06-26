require('dotenv').config();
const express = require('express');
const expressSession = require('express-session');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('./generated/prisma');


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

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.set('views', 'views')
app.set('view engine', 'ejs')

app.get('/', (req, res, next) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`The app is live on port - ${PORT}`)
})