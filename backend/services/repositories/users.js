const db = require('../../src/db/models/index')


const getAllUsers = async () => {
    try {
        return await db.User.findAll({
            raw: true
        })
    } catch(error) {
        return error
    }
}


module.exports = {
    getAllUsers
}