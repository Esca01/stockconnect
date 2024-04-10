const dotenv = require('dotenv');
const mysql = require('mysql');

dotenv.config();

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Verifica si la conexión a la base de datos fue exitosa
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
  connection.release(); // libera la conexión
});

module.exports = db;
