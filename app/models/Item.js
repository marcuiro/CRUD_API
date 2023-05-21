const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  item: {
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
