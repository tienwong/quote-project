const mongoose = require('mongoose')

const quoteSchema = {
    author: String,
    text: String
}

module.exports = mongoose.model('Quote', quoteSchema)