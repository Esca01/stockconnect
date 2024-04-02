const db = require('../config/database');

// Función para obtener todos los usuarios
exports.getUsuarios = async (req, res) => {
  try {
    // Aquí realizamos la consulta a la base de datos para obtener todos los usuarios
    const usuarios = await db.query('SELECT * FROM usuario');
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
};

// Función para obtener un usuario por su ID
exports.getUsuarioById = async (req, res) => {
  const { id } = req.params;
  try {
    // Aquí realizamos la consulta a la base de datos para obtener un usuario por su ID
    const usuario = await db.query('SELECT * FROM usuario WHERE IDUsuario = ?', [id]);
    if (usuario.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(usuario[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }
};

// Función para crear un nuevo usuario
exports.createUsuario = async (req, res) => {
  const { Nombre, Correo, Contraseña, Rol } = req.body;
  try {
    // Aquí realizamos la inserción del nuevo usuario en la base de datos
    await db.query('INSERT INTO usuario (Nombre, Correo, Contraseña, Rol) VALUES (?, ?, ?, ?)', [Nombre, Correo, Contraseña, Rol]);
    res.json({ message: 'Usuario creado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
};

// Función para actualizar un usuario existente
exports.updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { Nombre, Correo, Contraseña, Rol } = req.body;
  try {
    // Aquí realizamos la actualización del usuario en la base de datos
    await db.query('UPDATE usuario SET Nombre = ?, Correo = ?, Contraseña = ?, Rol = ? WHERE IDUsuario = ?', [Nombre, Correo, Contraseña, Rol, id]);
    res.json({ message: 'Usuario actualizado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
};

// Función para eliminar un usuario existente
exports.deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    // Aquí realizamos la eliminación del usuario en la base de datos
    await db.query('DELETE FROM usuario WHERE IDUsuario = ?', [id]);
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el usuario' });
  }
};
