'use strict';
const User = require('./seedfiles/user')

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('User', User, {});
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
