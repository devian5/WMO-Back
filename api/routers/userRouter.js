
const router = require('express').Router();
const userController = require('../controllers/userController');

const createHandler = async (req,res) => {
    try {
        const {name,email,password} = req.body;
        const result = await userController.create(name,email,password);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error); 
    }
}

const checkHandler = async (req,res) => {
    try {
        const {name,email,password} = req.body;
        const result = await userController.signIn(name,email,password);
        // console.log(email,password)
        res.json({result,date: new Date});
        
    } catch (error) {
        console.log(error); 
    };
};

const updateHandler = async (req,res) => {
    try {
        const {name,email,password} = req.body;
        const result = await userController.update(name,email,password);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error)   
    }
};

const deleteHandler = async (req,res) => {
    try {
        const {name,email,password} = req.body;
        const result = await userController.delete(name,email,password);

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

router.delete('/delete', deleteHandler);

router.put('/update', updateHandler);

router.get('/all', userAllHandler);

router.delete('/delete-all', deleteUserHandler)

module.exports = router