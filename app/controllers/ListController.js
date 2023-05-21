const { List, Item } = require('../models');

class ListController {

  async findAll(req, res) {
    const lists = await List.findAll({ include: { model: Item, as: 'items' } });
    res.json(lists);
  }

  async create(req, res) {
    const list = await List.create(req.body);
    res.status(201).json(list);
  }

  async findById(req, res) {
    const list = await List.findByPk(req.params.id, { include: { model: Item, as: 'items' } });
    if (!list) {
      return res.status(404).json({ error: 'List not found' });
    }
    res.json(list);
  }

  async update(req, res) {
    const [updated] = await List.update(req.body, { where: { id: req.params.id } });
    if (!updated) {
      return res.status(404).json({ error: 'List not found' });
    }
    const list = await List.findByPk(req.params.id);
    res.json(list);
  }

  async delete(req, res) {
    const deleted = await List.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      return res.status(404).json({ error: 'List not found' });
    }
    res.status(204).json();
  }
}

module.exports = ListController;
