const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const app = express();

// Importa el enrutador de la API
const apiRouter = require('./routes/api');

// Configura las variables de entorno
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas estáticas
app.use(express.static(path.join(__dirname, 'views')));

// Rutas de la API
app.use('/api', apiRouter);

// Puerto
const PORT = 3000;

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
