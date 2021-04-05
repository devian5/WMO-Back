const Rental = require('../models/rentalModel');
const User = require('../models/userModel');
const Movie = require('../models/movieModel');

class RentalController {

    async rentMovie(ownerId,movieId) {
        const userEntity = await User.findById(ownerId);
        console.log(userEntity,'ESTO NO ES NULL')
        const movieEntity = await Movie.findById(movieId)
        if(!userEntity || !movieEntity){
            throw new Error('ooops')
        }
        return await Rental.create({
            userName: userEntity.userName,
            title: movieEntity.title,
            ownerId: ownerId,
            movieId: movieId
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
}

const rentalController = new RentalController;
module.exports = rentalController;