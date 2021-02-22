const movie = require('../models/movieModel');

class MovieController {
    
    async create(film){
        return movie.create(film);
    };

    async movieAll(film) {
        return movie.find(film);
    }; 

    // async update(title,overview,genre) {
    //     return movie.updateOne(
    //         {
    //             title,
    //             overview,
    //             genre
    //         }
    //     )
    // }

    async update(id,film) {
        return movie.findByIdAndUpdate(id,film);
    };

    async delete(id){
        return movie.findByIdAndRemove(id)
    }
};

const movieController = new MovieController;
module.exports = movieController;