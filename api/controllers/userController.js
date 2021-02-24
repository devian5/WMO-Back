const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'pepesecret'

class UserController {

  async create(user) {
    user.password = await bcrypt.hash(user.password,5)
    console.log(user)
   return User.create(user);
  };

  async signIn(user) { 
    const errorMessage = { error_message: 'Wrong email or password' }
    const user_list = await User.find(user)

    if (user_list.length < 1) {
      return errorMessage
    }
    return {user: user_list}
  }

  async login(email,password) {
    const user =  await User.findOne({email});
    if(!user){
        throw new Error('The email does not exist')
    }
    if(!await bcrypt.compare(password,user.password)){
        throw new Error('Wrong password')
    };

    const payload = {
        userId: user.id,
        tokenCreationDate: new Date,
    }

    return jwt.sign(payload, secret);
    
  }

  async update(id,user) {
    return User.findByIdAndUpdate(id,user);
  };

  async delete(id) {
    return User.findByIdAndRemove(id)
  }

  async deleteAll(deleteUser) {
    return User.deleteMany(deleteUser)
  }

  async userAll(allUser) {
    return User.find(allUser)
  }

}

const userController = new UserController
module.exports = userController