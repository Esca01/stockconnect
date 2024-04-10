const db = require('../config/database');

class Usuario {
  constructor(nombre, correo, contraseña, rol) {
    this.nombre = nombre;
    this.correo = correo;
    this.contraseña = contraseña;
    this.rol = rol;
  }

  // Método para obtener todos los usuarios
  static async getAll() {
    try {
      // Realizamos la consulta a la base de datos para obtener todos los usuarios
      const usuarios = await db.query('SELECT * FROM usuario');
      return usuarios;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener los usuarios');
    }
  }

  // Método para obtener un usuario por su ID
  static async getById(id) {
    try {
      // Realizamos la consulta a la base de datos para obtener un usuario por su ID
      const usuario = await db.query('SELECT * FROM usuario WHERE IDUsuario = ?', [id]);
      if (usuario.length === 0) {
        throw new Error('Usuario no encontrado');
      }
      return usuario[0];
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener el usuario');
    }
  }

  // Método para crear un nuevo usuario
  async create() {
    try {
      // Realizamos la inserción del nuevo usuario en la base de datos
      await db.query('INSERT INTO usuario (Nombre, Correo, Contraseña, Rol) VALUES (?, ?, ?, ?)', [this.nombre, this.correo, this.contraseña, this.rol]);
    } catch (error) {
      console.error(error);
      throw new Error('Error al crear el usuario');
    }
  }

  // Método para actualizar un usuario existente
  async update(id) {
    try {
      // Realizamos la actualización del usuario en la base de datos
      await db.query('UPDATE usuario SET Nombre = ?, Correo = ?, Contraseña = ?, Rol = ? WHERE IDUsuario = ?', [this.nombre, this.correo, this.contraseña, this.rol, id]);
    } catch (error) {
      console.error(error);
      throw new Error('Error al actualizar el usuario');
    }
  }

  // Método para eliminar un usuario existente
  static async delete(id) {
    try {
      // Realizamos la eliminación del usuario en la base de datos
      await db.query('DELETE FROM usuario WHERE IDUsuario = ?', [id]);
    } catch (error) {
      console.error(error);
      throw new Error('Error al eliminar el usuario');
    }
  }
}

module.exports = Usuario;
