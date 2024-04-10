const db = require('../config/database');

// Función para obtener todos los productos
exports.getProductos = async (req, res) => {
  try {
    const productosQuery = 'SELECT * FROM producto';
    db.query(productosQuery, (err, result) => {
      if (err) {
        res.status(500).send({ error: 'Error al obtener los productos' });
        return;
      }
      res.send(result);
    });
  } catch (error) {
    console.error('Error al ejecutar la consulta de productos:', error);
    res.status(500).send({ error: 'Error al obtener los productos' });
  }
};




// Función para obtener un producto por su ID
exports.getProductoById = async (req, res) => {
  const { id } = req.params;
  try {
    // Aquí realizamos la consulta a la base de datos para obtener un producto por su ID
    const producto = await db.query('SELECT * FROM producto WHERE IDProducto = ?', [id]);
    if (producto.length === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(producto[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el producto' });
  }
};

// Función para crear un nuevo producto
exports.createProducto = async (req, res) => {
  const { Nombre, Descripcion, Categoria, Precio, Stock, IDProveedor } = req.body;
  try {
    // Aquí realizamos la inserción del nuevo producto en la base de datos
    await db.query('INSERT INTO producto (Nombre, Descripcion, Categoria, Precio, Stock, IDProveedor) VALUES (?, ?, ?, ?, ?, ?)', [Nombre, Descripcion, Categoria, Precio, Stock, IDProveedor]);
    res.json({ message: 'Producto creado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el producto' });
  }
};

// Función para actualizar un producto existente
exports.updateProducto = async (req, res) => {
  const { id } = req.params;
  const { Nombre, Descripcion, Categoria, Precio, Stock, IDProveedor } = req.body;
  try {
    // Aquí realizamos la actualización del producto en la base de datos
    await db.query('UPDATE producto SET Nombre = ?, Descripcion = ?, Categoria = ?, Precio = ?, Stock = ?, IDProveedor = ? WHERE IDProducto = ?', [Nombre, Descripcion, Categoria, Precio, Stock, IDProveedor, id]);
    res.json({ message: 'Producto actualizado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el producto' });
  }
};

// Función para eliminar un producto existente
exports.deleteProducto = async (req, res) => {
  const { id } = req.params;
  try {
    // Aquí realizamos la eliminación del producto en la base de datos
    await db.query('DELETE FROM producto WHERE IDProducto = ?', [id]);
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el producto' });
  }
};
