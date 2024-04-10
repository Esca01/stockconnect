const db = require('../config/database');

class Proveedor {
  constructor(nombre, contacto, correo, telefono) {
    this.nombre = nombre;
    this.contacto = contacto;
    this.correo = correo;
    this.telefono = telefono;
  }

  // Método para obtener todos los proveedores
  static async getAll() {
    try {
      // Realizamos la consulta a la base de datos para obtener todos los proveedores
      const proveedores = await db.query('SELECT * FROM proveedor');
      return proveedores;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener los proveedores');
    }
  }

  // Método para obtener un proveedor por su ID
  static async getById(id) {
    try {
      // Realizamos la consulta a la base de datos para obtener un proveedor por su ID
      const proveedor = await db.query('SELECT * FROM proveedor WHERE IDProveedor = ?', [id]);
      if (proveedor.length === 0) {
        throw new Error('Proveedor no encontrado');
      }
      return proveedor[0];
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener el proveedor');
    }
  }

  // Método para crear un nuevo proveedor
  async create() {
    try {
      // Realizamos la inserción del nuevo proveedor en la base de datos
      await db.query('INSERT INTO proveedor (Nombre, Contacto, Correo, Telefono) VALUES (?, ?, ?, ?)', [this.nombre, this.contacto, this.correo, this.telefono]);
    } catch (error) {
      console.error(error);
      throw new Error('Error al crear el proveedor');
    }
  }

  // Método para actualizar un proveedor existente
  async update(id) {
    try {
      // Realizamos la actualización del proveedor en la base de datos
      await db.query('UPDATE proveedor SET Nombre = ?, Contacto = ?, Correo = ?, Telefono = ? WHERE IDProveedor = ?', [this.nombre, this.contacto, this.correo, this.telefono, id]);
    } catch (error) {
      console.error(error);
      throw new Error('Error al actualizar el proveedor');
    }
  }

  // Método para eliminar un proveedor existente
  static async delete(id) {
    try {
      // Realizamos la eliminación del proveedor en la base de datos
      await db.query('DELETE FROM proveedor WHERE IDProveedor = ?', [id]);
    } catch (error) {
      console.error(error);
      throw new Error('Error al eliminar el proveedor');
    }
  }
}

module.exports = Proveedor;
