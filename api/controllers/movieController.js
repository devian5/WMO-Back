const movie = require('../models/movieModel');

class MovieController {
    
    async create(film){
        return movie.create(film);
    };

    async movieAll(film) {
        return movie.find(film);
    }; 

    // async update() {
    //     return movie.update()
    // }
};

const movieController = new MovieController;
module.exports = movieController;