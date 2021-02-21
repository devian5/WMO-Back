const movie = require('../models/movieModel');

class MovieController {
    
    async create(film){
        return movie.create(film);
    };

    async movieAll(film) {
        return movie.find(film);
    }; 

    async update(title,overview,genre) {
        return movie.updateOne(
            {
                title,
                overview,
                genre
            }
        )
    }

    // async delete(film){
    //     return movie.deleteOne(film)
    // }
};

const movieController = new MovieController;
module.exports = movieController;