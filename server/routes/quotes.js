const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('GET route on /quotes')
})

router.post('/', (req, res) => {
    res.send('POST route on /quotes')
})

module.exports = router