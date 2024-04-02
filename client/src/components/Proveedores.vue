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
    <div class="card">
      <p>
        Empresa: <span>{{ empresa }}</span>
      </p>
      <p>
        NIT: <span>{{ nit }}</span>
      </p>
      <p>
        Contacto: <span>{{ contacto }}</span>
      </p>
    </div>

    <!-- Tarjetas dinámicas basadas en los datos de la base de datos -->
    <div v-for="dato in datos" :key="dato.id" class="card">
      <p>
        Empresa: <span>{{ dato.empresa }}</span>
      </p>
      <p>
        NIT: <span>{{ dato.nit }}</span>
      </p>
      <p>
        Contacto: <span>{{ dato.contacto }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      empresa: "Nombre de la empresa",
      nit: "Número de NIT",
      contacto: "Información de contacto",
      datos: [], // Agrega tus datos dinámicos aquí
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  background-color: white;
  max-width: 600px;
  /* Establece un ancho máximo para la tarjeta */
  width: 90%;
  /* La tarjeta ocupará el 90% del ancho de su contenedor */
  margin: 0 auto;
  /* Centra la tarjeta */
}
</style>
