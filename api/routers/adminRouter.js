const router = require('express').Router();
const adminController = require('../controllers/adminController');
const Admin = require('../models/adminModel')


const createHandler = async (req,res) => {

    try {
        const newAdmin = new Admin(req.body);
        const result = await adminController.create(newAdmin);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error); 
    };

};

const loginHandler = async (req,res) => {

    try {
        const {email,password} = req.body;
        const jwt = await adminController.login(email,password);
        const token = jwt.token;
        console.log(token,'TOOOOKEN!<=====================');
        const admin = jwt.admin;
        console.log(admin,'USEEER!<========================');
        res.json({token,admin, date: new Date});
    } catch (error) {
        return res.status(401).json({
            message: error.message
        });
    };    
};

const updateHandler = async (req,res) => {

    try {
        const updateUser = req.body;
        const id = req.params.id
        const result = await adminController.update(id,updateUser);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error);  
    };
};

const deleteHandler = async (req,res) => {
    try {
        const id = req.params.id;
        const result = await adminController.delete(id);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error);   
    };

};

const deleteUserHandler = async (req,res) => {
    try {
        const id = req.params.id;
        const result = await userController.delete(id);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error);   
    };
};

const adminAllHandler = async (req,res) => {
    try {
        const result = await adminController.adminAll();
        res.json({result,date: new Date});
        
    } catch (error) {
    };

};

const adminAllUserHandler = async (req,res) => {
    try {
        const result = await adminController.userAll();
        res.json({result,date: new Date});
        
    } catch (error) {
    };

};



router.post('/', createHandler);
router.post('/login', loginHandler);
router.put('/:id', updateHandler);
router.delete('/id', deleteHandler);
router.delete('/id', deleteUserHandler);
router.get('/', adminAllHandler);
router.get('/users', adminAllUserHandler);

module.exports = router