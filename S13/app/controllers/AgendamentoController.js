const { Agendamento, Paciente } = require('../models');

class AgendamentoController {

  async findAll(req, res) {
    const agendamentos = await Agendamento.findAll({ include: { model: Paciente, as: 'pacientes' } });
    res.json(agendamentos);
  }

  async create(req, res) {
    const agendamento = await Agendamento.create(req.body);
    res.status(201).json(list);
  }

  async findById(req, res) {
    const agendamento = await Agendamento.findByPk(req.params.id, { include: { model: Paciente, as: 'pacientes' } });
    if (!agendamento) {
      return res.status(404).json({ error: 'Agendamento not found' });
    }
    res.json(list);
  }

  async update(req, res) {
    const [updated] = await Agendamento.update(req.body, { where: { id: req.params.id } });
    if (!updated) {
      return res.status(404).json({ error: 'Agendamento not found' });
    }
    const agendamento = await Agendamento.findByPk(req.params.id);
    res.json(agendamento);
  }

  async delete(req, res) {
    const deleted = await Agendamento.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      return res.status(404).json({ error: 'Agendamento not found' });
    }
    res.status(204).json();
  }
}

module.exports = AgendamentoController;
