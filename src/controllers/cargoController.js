const CargoService = require('../services/cargoService');

class CargoController {
  static async getCargos(req, res) {
    try {
      const cargos = await CargoService.getAllCargos();
      res.json(cargos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getCargoById(req, res) {
    try {
      const cargo = await CargoService.getCargoById(req.params.id);
      if (cargo) {
        res.json(cargo);
      } else {
        res.status(404).json({ error: 'Cargo not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createCargo(req, res) {
    try {
      const newCargo = await CargoService.createCargo(req.body);
      res.status(201).json(newCargo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateCargo(req, res) {
    try {
      const updatedCargo = await CargoService.updateCargo(
        req.params.id,
        req.body
      );
      res.json(updatedCargo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteCargo(req, res) {
    try {
      await CargoService.deleteCargo(req.params.id);
      res.status(204).json({});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = CargoController;
