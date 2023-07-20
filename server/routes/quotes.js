const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('quotesLandingPage')
})

router.get('/addNewQuote', (req, res) => {
    res.render('addNewQuote')
})

router.get('/byAuthor', (req, res) => {
    res.send('This is here until Tien implements the Get Quotes By Author Page.')
})

router.post('/addNewQuote', (req, res) => {
    res.render('displayQuote', {
        text: req.body.text,
        author: req.body.author
    })
})

module.exports = router