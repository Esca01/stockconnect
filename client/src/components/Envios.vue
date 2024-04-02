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

    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Proveedor</th>
          <th>Fecha Estimada de Llegada</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="envio in envios" :key="envio.id">
          <td>{{ envio.producto }}</td>
          <td>{{ envio.proveedor }}</td>
          <td>{{ envio.fechaEstimada }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      envios: [], // Aquí debes cargar los datos de los envíos de la base de datos
    };
  },
  created() {
    // Aquí debes cargar los datos de los envíos de la base de datos en 'envios'
    // Ejemplo de carga de datos simulados:
    this.envios = [
      {
        id: 1,
        producto: "Producto A",
        proveedor: "Proveedor X",
        fechaEstimada: "2024-04-01",
      },
      {
        id: 2,
        producto: "Producto B",
        proveedor: "Proveedor Y",
        fechaEstimada: "2024-04-02",
      },
      {
        id: 3,
        producto: "Producto C",
        proveedor: "Proveedor Z",
        fechaEstimada: "2024-04-03",
      },
    ];
  },
};
</script>

<style scoped>
table {
  width: 90%;
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
</style>
