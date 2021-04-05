const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const paymentSchema = new Schema(
    {
        // payment: [],
        // email: {
        //     type: String,
        // },
        ownerId: {
            type: ObjectId,
        },
        visa: {
            type: Number,
            unique: true
        },
        month: String,
        year: Number,
        cvv: Number,
        cardName: String
    });
    
module.exports = mongoose.model('Payment', paymentSchema);