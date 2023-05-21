const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Item = sequelize.define('Paciente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  paciente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  listId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Lists', // nome da tabela no banco de dados
      key: 'id'
    }
  }
});


module.exports = Item;
