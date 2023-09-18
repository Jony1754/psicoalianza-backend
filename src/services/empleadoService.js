const EmpleadoRepository = require('../repositories/empleadoRepository');

class EmpleadoService {
  static async getAllEmpleados() {
    return await EmpleadoRepository.findAll();
  }

  static async getEmpleadoById(id) {
    return await EmpleadoRepository.findById(id);
  }

  static async createEmpleado(empleado) {
    return await EmpleadoRepository.create(empleado);
  }

  static async updateEmpleado(id, empleado) {
    return await EmpleadoRepository.update(id, empleado);
  }

  static async deleteEmpleado(id) {
    return await EmpleadoRepository.delete(id);
  }
}

module.exports = EmpleadoService;
