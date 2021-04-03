const Admin = require('../models/adminModel');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'pepesecret'

class AdminController {

    async create(admin) {
        admin.password = await bcrypt.hash(admin.password,5)
        console.log(admin)
       return Admin.create(admin);
    };

    async login(email,password) {

        const admin =  await Admin.findOne({email});
        if(!admin){
            throw new Error('The email does not exist')
        }
        if(!await bcrypt.compare(password,admin.password)){
            throw new Error('Wrong password')
        };

        const payload = {
            adminId: admin.id,
            tokenCreationDate: new Date,
        };

        const token = jwt.sign(payload, secret);
        return {token, admin}
        
    };

    async update(id,user) {
        return User.findByIdAndUpdate(id,user);
    };

    async delete(id) {
        return User.findByIdAndRemove(id)
    };

    async delete(id) {
        return Admin.findByIdAndRemove(id)
    };

    async userAll(allUser) {
        return User.find(allUser)
    }; 

    async adminAll(allAdmin) {
        return Admin.find(allAdmin)
    }; 

};

const adminController = new AdminController
module.exports = adminController;