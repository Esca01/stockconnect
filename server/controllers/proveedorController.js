const db = require('../config/database');

// Función para obtener todos los proveedores
exports.getProveedores = async (req, res) => {
  try {
    const proveedoresQuery = 'SELECT * FROM proveedor';
    db.query(proveedoresQuery, (err, result) => {
      if (err) {
        res.status(500).send({ error: 'Error al obtener los proveedores' });
        return;
      }
      res.send(result);
    });
  } catch (error) {
    console.error('Error al ejecutar la consulta de proveedores:', error);
    res.status(500).send({ error: 'Error al obtener los proveedores' });
  }
};


// Función para obtener un proveedor por su ID
exports.getProveedorById = async (req, res) => {
  const { id } = req.params;
  try {
    // Realizamos la consulta a la base de datos para obtener un proveedor por su ID
    const proveedor = await db.query('SELECT * FROM proveedor WHERE IDProveedor = ?', [id]);
    if (proveedor.length === 0) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }
    res.json(proveedor[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el proveedor' });
  }
};

// Función para crear un nuevo proveedor
exports.createProveedor = async (req, res) => {
  const { Nombre, Contacto, Correo, Telefono } = req.body;
  try {
    // Realizamos la inserción del nuevo proveedor en la base de datos
    await db.query('INSERT INTO proveedor (Nombre, Contacto, Correo, Telefono) VALUES (?, ?, ?, ?)', [Nombre, Contacto, Correo, Telefono]);
    res.json({ message: 'Proveedor creado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el proveedor' });
  }
};

// Función para actualizar un proveedor existente
exports.updateProveedor = async (req, res) => {
  const { id } = req.params;
  const { Nombre, Contacto, Correo, Telefono } = req.body;
  try {
    // Realizamos la actualización del proveedor en la base de datos
    await db.query('UPDATE proveedor SET Nombre = ?, Contacto = ?, Correo = ?, Telefono = ? WHERE IDProveedor = ?', [Nombre, Contacto, Correo, Telefono, id]);
    res.json({ message: 'Proveedor actualizado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el proveedor' });
  }
};

// Función para eliminar un proveedor existente
exports.deleteProveedor = async (req, res) => {
  const { id } = req.params;
  try {
    // Realizamos la eliminación del proveedor en la base de datos
    await db.query('DELETE FROM proveedor WHERE IDProveedor = ?', [id]);
    res.json({ message: 'Proveedor eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el proveedor' });
  }
};
