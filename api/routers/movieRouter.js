const router = require('express').Router()
const movieController = require('../controllers/movieController');
const Movie = require('../models/movieModel');


const createHandler = async (req,res) => {
    try {
        const result = await movieController.create(new Movie(req.body));
        res.json({result,date: new Date})
        
    } catch (error) {
        console.log('=====================>',error)
    }
}

const movieAllHandler = async (req,res) => {
    try {
        const result = await movieController.movieAll();
        res.json({result,date: new Date})
    } catch (error) {
        console.log(error)
    }
}

const searchByIdHandler = async (req,res) => {
    try {
        const movieSearch = req.body;
        const id = req.params.id;
        const result = await movieController.searchById(id,movieSearch);
        res.json({result,date: new Date});
    } catch (error) {
        console.log(error)
    }
}

const searchTitleHeandler = async (req,res) => {
    try {
        const result = await movieController.searchTitle(req.body);
        res.json({result,date: new Date});
    } catch (error) {
        console.log(error)
    }
}

const updateHandler = async (req,res) => {
    try {
        const updateMovie = req.body;
        const id = req.params.id;
        const result = await movieController.update(id,updateMovie);
        res.json({result,date: new Date});
        
    } catch (error) {
        console.log(error) 
    }
}

const deleteHandler = async (req,res) => {
    try {
        const id = req.params.id;
        const result = await movieController.delete(id);
        res.json({result,date: new Date});
    } catch (error) {
        console.log('================>',error);
    };
};


router.post('/', createHandler);
router.get('/:id', searchByIdHandler);
router.get('/search', searchTitleHeandler);
router.get('/', movieAllHandler);
router.put('/:id', updateHandler);
router.delete('/:id', deleteHandler);

module.exports = router;