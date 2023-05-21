const { Item } = require('../models');

class ItemController {
    constructor() {
        
    }
  
    async findAll (req, res) {
        try {
            const items = await Item.findAll();
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const id = req.params.id;
            const item = await Item.findByPk(id);

            if (item) {
                res.status(200).json(item);
            } else {
                res.status(404).json({ error: 'Item not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
  
    async create(req, res) {
        try {
            const newItem = await Item.create(req.body);
            res.status(201).json(newItem);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const [updatedRows] = await Item.update(req.body, {
                where: { id },
            });

            if (updatedRows) {
                res.status(200).json({ message: 'Item updated successfully' });
            } else {
                res.status(404).json({ error: 'Item not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const deletedRows = await Item.destroy({
                where: { id },
            });

            if (deletedRows) {
                res.status(200).json({ message: 'Item deleted successfully' });
            } else {
                res.status(404).json({ error: 'Item not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
  
  }
  
  module.exports = ItemController;
  