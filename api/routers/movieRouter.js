const router = require('express').Router()
const movieController = require('../controllers/movieController');
const Movie = require('../models/movieModel');


const createHandler = async (req,res) => {
    try {
        const result = await movieController.create(new Movie(req.body));
        res.json(result)
        
    } catch (error) {
        console.log('=====================>',error)
    }
}

const movieAllHandler = async (req,res) => {
    try {
        const result = await movieController.movieAll();
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}




router.post('/', createHandler);
router.get('/all', movieAllHandler);

module.exports = router;