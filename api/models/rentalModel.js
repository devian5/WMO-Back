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
        dateInit: Date,
        dateEnd: Date,
        price: {
            type: Number,
            default: 2.5
        }
    }
    
)

module.exports = mongoose.model('Rental', rentalSchema)