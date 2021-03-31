const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    year: Number,
    runtime: Number,
    genres: {
        type: Array
    },
    director: String,
    actors: {
        type: Array
    },
    plot: String,
    posterUrl: String
})
module.exports = mongoose.model('Movie', movieSchema)
