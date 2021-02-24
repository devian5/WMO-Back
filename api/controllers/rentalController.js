const Rental = require('../models/rentalModel');

class RentalController {

    // async create(rental) {
    //     return Rental.create(rental);
    // };

    async rentMovie(ownerId,movieId) {
        // console.log('===================> CONTROLLER',movieId);
        Rental.create({
            ownerId: ownerId,
            movieId: movieId
            // dateIni: range[0],
            // dateEnd:  range[1]
        });
    };

    async searchAll(order) {
        return Rental.find(order);
    };

    async searchById(id,order) {
        return Rental.findById(id,order);
    };

    async delete(id){
        return Rental.findByIdAndRemove(id)
    }



    // async rentMovie(user,movie,range) {
    //     let daysNumber = moment(range[0]).diff(range[1]).days();
    // conts movie = await Movie.findById(movieId)
    //     return Rental.create({
    //         ownerId: userId,
    //         movieId: movieId,
    //         dateInit: range[0],
    //         dateEnd: range[1],
    //         price: dailyPrice * daysNumber
    //     });
    // };

}

const rentalController = new RentalController;
module.exports = rentalController;