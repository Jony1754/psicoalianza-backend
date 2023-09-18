const CargoRepository = require('../repositories/cargoRepository');

class CargoService {
  static async getAllCargos() {
    return await CargoRepository.findAll();
  }

  static async getCargoById(id) {
    return await CargoRepository.findById(id);
  }

  static async createCargo(cargo) {
    return await CargoRepository.create(cargo);
  }

  static async updateCargo(id, cargo) {
    return await CargoRepository.update(id, cargo);
  }

  static async deleteCargo(id) {
    return await CargoRepository.delete(id);
  }
}

module.exports = CargoService;
