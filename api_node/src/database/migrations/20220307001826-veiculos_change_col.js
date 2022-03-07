module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('veiculos', 'update_at', 'updated_at');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('veiculos', 'update_at', 'updated_at');
  }
};
