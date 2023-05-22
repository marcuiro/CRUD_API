const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Agendamento = sequelize.define('Agendamento', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  }
});

module.exports = Agendamento;
