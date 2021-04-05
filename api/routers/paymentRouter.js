const router = require('express').Router();
const paymentController = require('../controllers/paymentController');
const auth = require('../middleware/auth');
const Payment = require('../models/paymentModel');

// const createHandler = async (req,res) => {
//     try {
//         const newCard = new Payment(req.body);
//         const id = req.params.id
//         console.log(newCard,'NEW CARD<=========>')
//         console.log(id,'NEW ID<=========>')
//         const result = await paymentController.cardCreate(newCard,id)
//         console.log(result,'result')
//         res.json({result,date: new Date});
//     } catch (error) {
//         console.log(error,'ERROR IN CREATE CARD');
//     };
// };
const createHandler = async (req,res) => {
    try {
        const newCard = new Payment(req.body);
        // const id = req.params.id
        console.log(newCard,'NEW CARD<=========>')
        const result = await paymentController.cardCreate
            (
                newCard.ownerId,
                newCard.visa,
                newCard.month,
                newCard.year,
                newCard.cvv,
                newCard.cardName,
                // id

            );
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

const searchByUserIdHandler = async (req,res) => {
    try {
        const userId = req.params.id;
        const result = await paymentController.searchByUserId(userId);
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

// router.post('/user/:id', auth, createHandler);
router.post('/', createHandler);
router.get('/',cardAllHandler);
router.get('/:id', searchByIdHandler);
router.get('/user/:id', auth, searchByUserIdHandler);
router.put('/:id', updateHandler);
router.delete('/:id', deleteHandler);

module.exports = router;