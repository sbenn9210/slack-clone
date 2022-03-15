"use strict";
const { v4: uuid } = require("uuid");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Channel.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      is_private: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: "Channel",
      tableName: "Channel",
      underscored: true
    }
  );
  Channel.beforeCreate((channel, _) => {
    return (channel.id = uuid());
  });
  return Channel;
};
