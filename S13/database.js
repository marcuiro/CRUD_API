const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('consultamedica', 'marcuiro', 'agro1029', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;