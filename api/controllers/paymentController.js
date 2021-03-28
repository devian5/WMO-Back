const Payment = require('../models/paymentModel');


class PaymentController {

    async create(card) {
        const createCard =  Payment.create(card);
        return createCard;
    };

    async cardAll(card) {
        return Payment.find(card);
    }; 

    async searchById(id,card) {
        return Payment.findById(id,card);
    };

    async searchTitle(card) {
        return Payment.findOne(card)
    }

    async update(id,card) {
        return Payment.findByIdAndUpdate(id,card);
    };

    async delete(id){
        return Payment.findByIdAndRemove(id)
    }

}

const paymentController = new PaymentController;
module.exports = paymentController;