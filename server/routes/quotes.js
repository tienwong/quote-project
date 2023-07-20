const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('quotesLandingPage')
})

router.get('/addNewQuote', (req, res) => {
    res.render('addNewQuote')
})

router.post('/addNewQuote', (req, res) => {
    res.render('displayQuote', {
        text: req.body.text,
        author: req.body.author
    })
})

module.exports = router