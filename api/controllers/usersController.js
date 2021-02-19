const users = require('../models/userModel')

class UsersController {

  async checkUser(email, password) { 
    const errorMessage = { error_message: 'Wrong email or password' }
    const users_list = await users.find({ email: email, password: password })

    if (users_list.length < 1) {
      return errorMessage
    }
    return {user: users_list}
  }

}

module.exports = UsersController