const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const movie_schema = new Schema({
    // id: {
    //     type: ObjectId,
    //     required: false
    // },
    title: String,
    overview: String,
    genre: String,
    // image: String
    
})
module.exports = mongoose.model('movie', movie_schema)
