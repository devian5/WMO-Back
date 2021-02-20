
const router = require('express').Router();
const userController = require('../controllers/userController');

const checkHandler = async (req,res) =>{
    try {
        const {email,password} = req.body;
        const result = await userController.checkUser(email,password);
        // console.log(email,password)
        res.json({result,date: new Date});
        
    } catch (error) {
        console.log(error); 
    };
};

const createHandler = async (req,res) => {
    try {
        const {name,email,password} = req.body;
        const result = await userController.create(name,email,password);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error);
        
    }
}

router.post('/check', checkHandler);

router.post('/', createHandler);

module.exports = router