<template>
  <div>
    <nav>
      <ul id="navbar">
        <li><router-link to="/login">Inicio</router-link></li>
        <li><router-link to="/producto">Productos</router-link></li>
        <li><router-link to="/proveedores">Proveedores</router-link></li>
        <li><router-link to="/envios">Envios</router-link></li>
        <li class="logout"><router-link to="/">Cerrar sesión</router-link></li>
      </ul>
    </nav>

    <div>
      <button @click="mostrarModal = true">Agregar Producto</button>

      <div v-if="mostrarModal" class="modal">
        <div class="modal-content">
          <span @click="mostrarModal = false" class="close">&times;</span>
          <p>
            Nombre del producto: <input v-model="producto.nombre" type="text" />
          </p>
          <p>
            Descripción del producto:
            <input v-model="producto.descripcion" type="text" />
          </p>
          <p>
            Categoria del producto:
            <input v-model="producto.categoria" type="text" />
          </p>
          <p>
            Stock del producto: <input v-model="producto.stock" type="number" />
          </p>
          <p>
            Precio del producto:
            <input v-model="producto.precio" type="number" />
          </p>

          <button @click="agregarProducto">Guardar</button>
        </div>
      </div>
      <br /><br />
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>Nombre del producto</th>
            <th>Descripción</th>
            <th>Categoria</th>
            <th>Stock</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="producto in productos" :key="producto.id">
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.descripcion }}</td>
            <td>{{ producto.categoria }}</td>
            <td>{{ producto.stock }}</td>
            <td>{{ producto.precio }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      mostrarModal: false,
      producto: {
        nombre: "",
        descripcion: "",
        categoria: "",
        stock: 0,
        precio: 0,
      },
      productos: [], // Almacena la lista de productos
    };
  },
  methods: {
    agregarProducto() {
      axios
        .post("/api/producto", this.producto)
        .then(() => {
          this.mostrarModal = false;
          this.producto = {
            nombre: "",
            descripcion: "",
            categoria: "",
            stock: 0,
            precio: 0,
          }; // Resetea los valores del formulario
          this.obtenerProductos(); // Actualiza la lista de productos
        })
        .catch((err) => {
          console.error(err);
          // Maneja el error como consideres apropiado
        });
    },
    obtenerProductos() {
      axios
        .get("/api/producto")
        .then((res) => {
          this.productos = res.data; // Actualiza la lista de productos
        })
        .catch((err) => {
          console.error(err);
          // Maneja el error como consideres apropiado
        });
    },
  },

  created() {
    this.obtenerProductos(); // Obtiene la lista de productos cuando se crea el componente
  },
};
</script>

<style scoped>
table {
  width: 95%;
  border-collapse: collapse;
  margin: 0 auto;
  background-color: white;
}

table,
th,
td {
  border: 1px solid black;
}

th,
td {
  padding: 15px;
  text-align: left;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
