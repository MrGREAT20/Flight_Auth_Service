'use strict';
/**
 *  ADDING ROLES IN THE 'ROLES' TABLE  (POPULATING WITH SOME VALUES)
 */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   /**
     * Add seed commands here.
     *
     * Example:
     * */
     await queryInterface.bulkInsert('Roles', [{
        name: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
     },{
      name: 'CUSTOMER',
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      name: 'AIRLINE_BUSINESS',
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
     /*
    */
   /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
