const db = require("../../src/db/models/index");

const getAllChannels = () => {
  return db.Channel.findAll();
};

const createChannel = (name, description, is_private) => {
  return db.Channel.create({
    name,
    description,
    is_private
  });
};

module.exports = {
  getAllChannels,
  createChannel
};
