// Importando los módulos requeridos
const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

// Cargando las variables de entorno desde el archivo .env
dotenv.config();

// Configurando el puerto
const port = process.env.PORT || 3000;

const app = express();

// Configurando middlewares
app.use(cors());
app.use(express.json());

// Estableciendo el motor de vista y la carpeta estática
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));

// Definiendo middleware de ruta
app.use('/api', require('./routes/api'));

// Escuchando en el puerto
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}/api`);
});

module.exports = app;
