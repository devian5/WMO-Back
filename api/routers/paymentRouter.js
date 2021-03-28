const router = require('express').Router();
const paymentController = require('../controllers/paymentController');
const Payment = require('../models/paymentModel');

const createHandler = async (req,res) => {
    try {
        const result = await paymentController.create(new Payment(req.body));
        res.json({result,date: new Date});
    } catch (error) {
        console.log(error,'ERROR IN CREATE CARD');
    };
};

const cardAllHandler = async (req,res) => {
    try {
        const result = await paymentController.cardAll();
        res.json({result,date: new Date})
        
    } catch (error) {
        console.log(error,'ERROR IN GET ALL CARDS');
    };
};

const searchByIdHandler = async (req,res) => {
    try {
        const cardSearch = req.body;
        const id = req.params.id;
        const result = await paymentController.searchById(id,cardSearch);
        res.json({result,date: new Date});
    } catch (error) {
        console.log(error,'ERROR IN SEARCH BY ID');
    };
};

const updateHandler = async (req,res) => {
    try {
        const updateCard = req.body;
        const id = req.params.id;
        const result = await paymentController.update(id,updateCard);
        res.json({result,date: new Date});
        
    } catch (error) {
        console.log(error,'ERROR UPDATING THE CARD'); 
    };
};

const deleteHandler = async (req,res) => {
    try {
        const id = req.params.id;
        const result = await paymentController.delete(id);
        res.json({result,date: new Date});
    } catch (error) {
        console.log(error,'ERROR  WHEN DELETE CARD');
    };
};

router.post('/', createHandler);
router.get('/',cardAllHandler);
router.get('/:id', searchByIdHandler);
router.put('/:id', updateHandler);
router.delete('/:id', deleteHandler);

module.exports = router;