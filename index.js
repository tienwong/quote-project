const express = require('express')
const bodyParser = require('body-parser')

const quotes = require('./server/routes/quotes')

require('dotenv').config()
require('./config/database')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/quotes', quotes)

app.set('view engine', 'pug')
app.set('views', './client')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000)