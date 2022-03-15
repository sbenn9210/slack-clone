const channelRepository = require("../repositories/channels");

const getAllChannels = async () => {
  try {
    return channelRepository.getAllChannels();
  } catch (error) {
    return error;
  }
};

const createChannel = async (name, description, is_private) => {
  try {
    return channelRepository.createChannel(name, description, is_private);
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllChannels,
  createChannel
};
