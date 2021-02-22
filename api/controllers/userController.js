const User = require('../models/userModel')

class UserController {

  async create(user) {
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