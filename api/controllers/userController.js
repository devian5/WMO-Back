const User = require('../models/userModel')

class UserController {

  async create(name,email, password) {
   return User.create({
      name,
      email, 
      password
    })

  }


  async signIn(name,email, password) { 
    const errorMessage = { error_message: 'Wrong email or password' }
    const user_list = await User.find({ name: name, email: email, password: password })

    if (user_list.length < 1) {
      return errorMessage
    }
    return {user: user_list}
  }

  async update(name,email,password) {
    return User.update(
      {
        name,
        email,
        password
      })
  }

  async delete(name,email,password) {
    return User.remove(
      {
        name,
        email,
        password
      }
    )
  }

  async userAll(allUser) {
    return User.find(allUser)

  }

}


const userController = new UserController
module.exports = userController