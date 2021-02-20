const User = require('../models/userModel')

class UserController {

  async create(name,email, password) {
   return User.create({
      name,
      email, 
      password
    })
    
  }


  async checkUser(email, password) { 
    const errorMessage = { error_message: 'Wrong email or password' }
    const user_list = await User.find({ email: email, password: password })

    if (user_list.length < 1) {
      return errorMessage
    }
    return {user: user_list}
  }

}


const userController = new UserController
module.exports = userController