const userController = require("../controllers/users")



const resolvers = {
    Query: {
        users: async () => {
            try {
                return await userController.getAllUsers()
            } catch (error) {
                return error
            }
        }
    }
}

module.exports = {
    resolvers
}