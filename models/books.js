//dependencies
const mongoose = require('mongoose')

//schema
const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: {type: String, default: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
})

//mongoose model
const Books = mongoose.model('Books', bookSchema)

//export model
module.exports = Books