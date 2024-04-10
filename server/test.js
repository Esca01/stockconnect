const assert = require('assert');
const ProductoController = require('./controllers/productoController');
const UsuarioController = require('./controllers/usuarioController');
const ProveedorController = require('./controllers/proveedorController');

describe('Obtener todos los productos', () => {
  it('Debería devolver una lista de productos', async () => {
    const productos = await ProductoController.getProductos();
    assert.strictEqual(productos.length > 0, true);
  });
});

describe('Obtener todos los usuarios', () => {
  it('Debería devolver una lista de usuarios', async () => {
    const usuarios = await UsuarioController.getUsuarios();
    assert.strictEqual(usuarios.length > 0, true);
  });
});

describe('Obtener todos los proveedores', () => {
  it('Debería devolver una lista de proveedores', async () => {
    const proveedores = await ProveedorController.getProveedores();
    assert.strictEqual(proveedores.length > 0, true);
  });
});

// Puedes continuar agregando pruebas para otros métodos si lo necesitas
