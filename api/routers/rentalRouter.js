const router = require('express').Router();
const rentalController = require('../controllers/rentalController');
const auth = require('../middleware/auth');
const Rental = require('../models/rentalModel');

const createHandler = async (req,res) => {
    try {
        const newOrder = new Rental(req.body);
        console.log('<====NEWORDER====>',newOrder)
        const result = await rentalController.rentMovie(newOrder.ownerId,newOrder.movieId);
        console.log('========>>>>>>>>', result);
        res.json({result,date: new Date});
    } catch (error) {
        console.log(error)
    };
};

const searchHandler = async (req,res) => {
    try {
        const result = await rentalController.searchAll();

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error)
    }
}

const searchByIdHandler = async (req,res) => {
    try {
        const orderSearch = req.body;
        const id = req.params.id;
        const result = await rentalController.searchById(id,orderSearch);
        res.json({result,date: new Date});
    } catch (error) {
        console.log(error)
    }
}

const searchByUserIdHandler = async (req,res) => {
    try {
        const userId = req.params.id;
        const result = await rentalController.searchByUserId(userId);
        res.json({result,date: new Date});
    } catch (error) {
        console.log(error,'ERROR IN SEARCH BY ID');
    };
};

const deleteHandler = async (req,res) => {
    try {
        const id = req.params.id;
        const result = await rentalController.delete(id);
        res.json({result,date: new Date});
    } catch (error) {
        console.log('================>',error);
    };
};



router.post('/', createHandler);
router.get('/', searchHandler);
router.get('/:id', searchByIdHandler);
router.get('/user/:id', auth, searchByUserIdHandler);
router.delete('/:id', deleteHandler);

module.exports = router;