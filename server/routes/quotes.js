const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('quotesLandingPage')
})

router.get('/addNewQuote', (req, res) => {
    res.send('Add New Quote endpoint')
})

router.get('/byAuthor', (req, res) => {
    res.send('By Author endpoint')
})

router.get('/byAuthor/:author', (req, res) => {
    res.send('Quotes by the author ' + req.params.author)
})

router.post('/', (req, res) => {
    res.send('POST route on /quotes')
})

module.exports = router