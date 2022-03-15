"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Channel_member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Channel_member.init(
    {
      channel_id: DataTypes.UUID,
      user_id: DataTypes.UUID
    },
    {
      sequelize,
      modelName: "Channel_member",
      tableName: "Channel_member",
      underscored: true
    }
  );
  return Channel_member;
};
