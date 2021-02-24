const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const rentalSchema = new Schema(
    {
        ownerId: {
            type: ObjectId,
            required: true,
        },
        movieId: {
            type: ObjectId,
            required: true,
        },
        dateInit:{
            type: Date,
            default: new Date
        },
        dateEnd: {
            type: Date,
            default: new Date(+new Date() + 7*24*60*60*1000) 
        },
        price: {
            type: Number,
            default: 2.5
        }
    }
);

module.exports = mongoose.model('Rental', rentalSchema)