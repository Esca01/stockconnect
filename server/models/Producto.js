const db = require('../config/database');

class Producto {
  constructor(nombre, descripcion, categoria, precio, stock, idProveedor) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.categoria = categoria;
    this.precio = precio;
    this.stock = stock;
    this.idProveedor = idProveedor;
  }

  // Método para obtener todos los productos
  static async getAll() {
    try {
      // Realizamos la consulta a la base de datos para obtener todos los productos
      const productos = await db.query('SELECT * FROM producto');
      return productos;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener los productos');
    }
  }

  // Método para obtener un producto por su ID
  static async getById(id) {
    try {
      // Realizamos la consulta a la base de datos para obtener un producto por su ID
      const producto = await db.query('SELECT * FROM producto WHERE IDProducto = ?', [id]);
      if (producto.length === 0) {
        throw new Error('Producto no encontrado');
      }
      return producto[0];
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener el producto');
    }
  }

  // Método para crear un nuevo producto
  async create() {
    try {
      // Realizamos la inserción del nuevo producto en la base de datos
      await db.query('INSERT INTO producto (Nombre, Descripcion, Categoria, Precio, Stock, IDProveedor) VALUES (?, ?, ?, ?, ?, ?)', [this.nombre, this.descripcion, this.categoria, this.precio, this.stock, this.idProveedor]);
    } catch (error) {
      console.error(error);
      throw new Error('Error al crear el producto');
    }
  }

  // Método para actualizar un producto existente
  async update(id) {
    try {
      // Realizamos la actualización del producto en la base de datos
      await db.query('UPDATE producto SET Nombre = ?, Descripcion = ?, Categoria = ?, Precio = ?, Stock = ?, IDProveedor = ? WHERE IDProducto = ?', [this.nombre, this.descripcion, this.categoria, this.precio, this.stock, this.idProveedor, id]);
    } catch (error) {
      console.error(error);
      throw new Error('Error al actualizar el producto');
    }
  }

  // Método para eliminar un producto existente
  static async delete(id) {
    try {
      // Realizamos la eliminación del producto en la base de datos
      await db.query('DELETE FROM producto WHERE IDProducto = ?', [id]);
    } catch (error) {
      console.error(error);
      throw new Error('Error al eliminar el producto');
    }
  }
}

module.exports = Producto;
