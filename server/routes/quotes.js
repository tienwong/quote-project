const express = require('express')
const QuoteModel = require('../models/quote')

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
    if (!req.body.text || !req.body.author) {
        res.send('Invalid quote format.')
    }
    else {
        const quote = new QuoteModel({
            text: req.body.text,
            author: req.body.author
        })
        try {
            quote.save()
            res.render('displayQuote', {
                text: req.body.text,
                author: req.body.author
            })
        } catch (err) {
            res.send('There was a problem saving the quote you sent.')
        }
    }
})

module.exports = router