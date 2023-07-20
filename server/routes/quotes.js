const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('quotesLandingPage')
})

router.get('/addNewQuote', (req, res) => {
    res.render('addNewQuote')
})

router.get('/byAuthor', (req, res) => {
    res.send('By Author endpoint')
})

router.get('/byAuthor/:author', (req, res) => {
    res.send(req.params.author + ' said stuff at the GET by specific author endpoint')
})

router.post('/byAuthor/', (req, res) => {
    res.send('POST endpoint for /quotes/byAuthor')
})

router.post('/addNewQuote', (req, res) => {
    res.send(req.body.author + ' said ' + req.body.text)
})

module.exports = router