const Movie = require('../models/movieModel');
const Payment = require('../models/paymentModel');
const User = require('../models/userModel');


class PaymentController {

    // async cardCreate(ownerId,body) {
        
    //     const userEntity = await User.findById(ownerId);
    //     console.log(userEntity,'USER<========')
    //     return await Payment.create({
    //         ownerId: userEntity.id,
    //         payment: body.payment,

    //         // email: userEntity.email
            
    //     });
        
    // };

    async cardCreate(ownerId,visa,month,year,cvv,cardName) {
        
        const userEntity = await User.findById(ownerId);
        console.log(userEntity,'USER<========')
        return await Payment.create({
            ownerId: userEntity._id,
            visa: visa,
            month: month,
            year: year,
            cvv: cvv,
            cardName: cardName
            
        });
        
    };

    async cardAll(card) {
        return Payment.find(card);
    }; 

    async searchById(id,card) {
        return Payment.findById(id,card);
    };

    async searchByUserId(userId) {
        return Payment.find({ownerId: userId})
    }

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