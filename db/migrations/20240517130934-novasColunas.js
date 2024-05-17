'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('contatos', 'status', {
      type: Sequelize.STRING,
      defaultValue: 'pendente',
    });

    await queryInterface.changeColumn('contatos', 'fullname', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.changeColumn('contatos', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.changeColumn('contatos', 'phone', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.changeColumn('contatos', 'content', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('contatos');
  }
};
