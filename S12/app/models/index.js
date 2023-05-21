const sequelize = require('../../database');
const Paciente = require('./Paciente');
const List = require('./List');

const models = {
  List, 
  Paciente
};

Paciente.belongsTo(List, { foreignKey: 'listId', as: 'list' });
List.hasMany(Paciente, { foreignKey: 'listId', as: 'pacientes' });

const options = {
  alter: true,
  beforeAssociate: async (sequelizeInstance) => {
    await List.init({}, { sequelize: sequelizeInstance });
    await List.sync();
  },
};

sequelize.sync(options);


module.exports = models;
