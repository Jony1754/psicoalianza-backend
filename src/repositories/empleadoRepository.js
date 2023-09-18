const db = require('../database/database');

class EmpleadoRepository {
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM empleados');
    console.log('rows', rows);
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.query('SELECT * FROM empleados WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(empleado) {
    const result = await db.query('INSERT INTO empleados SET ?', [empleado]);
    return result[0];
  }

  static async update(id, empleado) {
    const result = await db.query('UPDATE empleados SET ? WHERE id = ?', [
      empleado,
      id,
    ]);
    return result[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM empleados WHERE id = ?', [id]);
    return result[0];
  }
}

module.exports = EmpleadoRepository;
