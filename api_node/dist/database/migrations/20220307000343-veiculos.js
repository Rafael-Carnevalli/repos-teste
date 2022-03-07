"use strict";module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('veiculos', 'create_at', 'created_at');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('veiculos', 'create_at', 'created_at');
  }
};
