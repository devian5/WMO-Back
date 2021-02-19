const mongoose = require('mongoose')
const Schema = mongoose.Schema

const users_schema = new Schema({
    name: String,
    email: String,
    password: String,
})
module.exports = mongoose.model('users', users_schema)
