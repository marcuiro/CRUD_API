const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Paciente = sequelize.define('Paciente', {
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
      model: 'Lists',
      key: 'id'
    }
  },
  agendamentoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Agendamentos',
      key: 'id'
    }
  }
});


module.exports = Paciente;
