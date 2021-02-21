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


const updateHandler = async (req,res) => {
    try {
        const {title,overview,genre} = req.body
        const result = await movieController.update(title,overview,genre)
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

// const deleteHandler = async (req,res) => {
//     try {
        
//     } catch (error) {
//         console.log('================>',error)
//     }
// }


router.post('/', createHandler);
router.get('/all', movieAllHandler);
router.put('/update', updateHandler);
router.delete('/delete', deleteHandler);

module.exports = router;