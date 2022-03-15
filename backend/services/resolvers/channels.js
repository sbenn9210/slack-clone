const channelController = require("../controllers/channels");

const resolvers = {
  Query: {
    channels: async () => {
      try {
        return await channelController.getAllChannels();
      } catch (error) {
        return error;
      }
    }
  },

  Mutation: {
    createChannel: async (
      parent,
      { name, description, is_private },
      context
    ) => {
      try {
        return await channelController.createChannel(
          name,
          description,
          is_private
        );
      } catch (error) {
        return error;
      }
    }
  }
};

module.exports = {
  resolvers
};
