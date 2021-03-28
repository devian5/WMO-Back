const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema(
    {
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
