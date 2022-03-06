const userRepository = require('../repositories/users')


const getAllUsers = async () => {
    try {
        return userRepository.getAllUsers()
    } catch(error) {
        return error
    }
}


module.exports = {
    getAllUsers
}