const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const movieSchema = new Schema({
    // id: {
    //     type: ObjectId,
    //     required: false
    // },
    title: String,
    overview: String,
    genre: String,
    // image: String
    
})
module.exports = mongoose.model('Movie', movieSchema)
