const EmpleadoService = require('../services/empleadoService');

class EmpleadoController {
  static async getEmpleados(req, res) {
    console.log('getEmpleados', req.query);
    try {
      const empleados = await EmpleadoService.getAllEmpleados();
      res.json(empleados);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getEmpleadoById(req, res) {
    try {
      const empleado = await EmpleadoService.getEmpleadoById(req.params.id);
      if (empleado) {
        res.json(empleado);
      } else {
        res.status(404).json({ error: 'Empleado not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createEmpleado(req, res) {
    try {
      const newEmpleado = await EmpleadoService.createEmpleado(req.body);
      res.status(201).json(newEmpleado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateEmpleado(req, res) {
    try {
      const updatedEmpleado = await EmpleadoService.updateEmpleado(
        req.params.id,
        req.body
      );
      res.json(updatedEmpleado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteEmpleado(req, res) {
    try {
      await EmpleadoService.deleteEmpleado(req.params.id);
      res.status(204).json({});
    } catch (error) {
      res.status(500).json({
        error: error.message,
        info: `El usuario envio ${req.params.id} `,
      });
    }
  }
}

module.exports = EmpleadoController;
