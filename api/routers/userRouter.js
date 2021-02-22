const router = require('express').Router();
const userController = require('../controllers/userController');
const User = require('../models/userModel')



const createHandler = async (req,res) => {
    try {
        const newUser = new User(req.body);
        const result = await userController.create(newUser);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error); 
    }
}

const checkHandler = async (req,res) => {
    try {
        const result = await userController.signIn(req.body);
        res.json({result,date: new Date});
        
    } catch (error) {
        console.log(error); 
    };
};

const updateHandler = async (req,res) => {
    try {
        const updateUser = req.body;
        const id = req.params.id
        const result = await userController.update(id,updateUser);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error)   
    }
};

const deleteHandler = async (req,res) => {
    try {
        const id = req.params.id;
        const result = await userController.delete(id);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error)   
    }
}

const deleteUserHandler = async (req,res) => {
    try {
        const result = await userController.deleteAll()
        res.json({result,date: new Date})    
    } catch (error) {
        console.log(error)
    }
};

const userAllHandler = async (req,res) => {
    try {
        const result = await userController.userAll();
        // console.log(result)
        res.json({result,date: new Date});
        
    } catch (error) {
        console.log('======================>',error); 
    };

}

router.post('/check', checkHandler);
router.post('/', createHandler);
router.delete('/delete/:id', deleteHandler);
router.put('/:id', updateHandler);
router.get('/all', userAllHandler);
router.delete('/delete-all', deleteUserHandler)

module.exports = router