const db = require('../database/database');

class CargoRepository {
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM cargos');
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.query('SELECT * FROM cargos WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(cargo) {
    const result = await db.query('INSERT INTO cargos SET ?', [cargo]);
    return result[0];
  }

  static async update(id, cargo) {
    const result = await db.query('UPDATE cargos SET ? WHERE id = ?', [
      cargo,
      id,
    ]);
    return result[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM cargos WHERE id = ?', [id]);
    return result[0];
  }
}

module.exports = CargoRepository;
