const express = require('express')
require('dotenv').config()
const database = require('./config/database')

const app = express()

app.get('/', (req, res) => {
    console.log(database)
    res.send('Hello world!')
})

app.listen(3000)