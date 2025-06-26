require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

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