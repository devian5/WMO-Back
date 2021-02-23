const movie = require('../models/movieModel');

class MovieController {
    
    async create(film){
        return movie.create(film);
    };

    async movieAll(film) {
        return movie.find(film);
    }; 

    async searchById(id,film) {
        return movie.findById(id,film);
    };

    async searchTitle(film) {
        return movie.findOne(film)
    }

    async update(id,film) {
        return movie.findByIdAndUpdate(id,film);
    };

    async delete(id){
        return movie.findByIdAndRemove(id)
    }
};

const movieController = new MovieController;
module.exports = movieController;