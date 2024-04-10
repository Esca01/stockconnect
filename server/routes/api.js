const express = require('express');
const router = express.Router();

// Importa los controladores necesarios
const productoController = require('../controllers/productoController');
const usuarioController = require('../controllers/usuarioController');
const proveedorController = require('../controllers/proveedorController');

// Define las rutas para los diferentes endpoints de la API
router.get('/productos', productoController.getProductos);
router.post('/productos', productoController.createProducto);
router.get('/usuarios', usuarioController.getUsuarios);
router.post('/usuarios', usuarioController.createUsuario);
router.get('/proveedores', proveedorController.getProveedores);
router.post('/proveedores', proveedorController.createProveedor);

// Exporta el enrutador
module.exports = router;
