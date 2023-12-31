const express = require('express')
const bodyParser = require('body-parser')

const quotes = require('./server/routes/quotes')

require('dotenv').config()
require('./config/database')

const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/quotes', quotes)

app.set('view engine', 'pug')
app.set('views', './client')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT)