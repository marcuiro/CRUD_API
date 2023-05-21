const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('consultas', 'marcuiro', 'agro1029', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;