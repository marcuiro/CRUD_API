const sequelize = require('../../database');
const Paciente = require('./Paciente');
const List = require('./List');
const Agendamento = require('./Agendamento');

const models = {
  List, 
  Paciente,
  Agendamento
};

List.hasMany(Paciente, { foreignKey: 'listId', as: 'pacientes' });
Paciente.belongsTo(List, { foreignKey: 'listId', as: 'list' });
Paciente.belongsTo(Agendamento, { foreignKey: 'agendamentoId', as: 'agendamentos' });
Agendamento.hasMany(Paciente, { foreignKey: 'agendamentoId', as: 'pacientes' });

const options = {
  alter: true,
  beforeAssociate: async (sequelizeInstance) => {
    await List.init({}, { sequelize: sequelizeInstance });
    await List.sync();
  },
};

sequelize.sync(options);


module.exports = models;
