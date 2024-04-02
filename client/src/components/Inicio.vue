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
    <figure>
      <img id="logo" src="../assets/logo.png" alt="Logo" />
    </figure>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  setup() {
    let Person = {
      nombre: "",
      apellido: "",
      edad: null,
      codigo: "",
    };
    return {
      Person,
    };
  },
};
</script>

<style>
#logo {
  margin: 170px;
}

#navbar {
  list-style-type: none;
  margin: -10px;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#navbar li {
  float: left;
  border-right: 1px solid #555;
}

#navbar li.logout {
  float: right;
  border-right: none;
  border-left: 1px solid #555;
}

#navbar li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

#navbar li a:hover {
  background-color: #e23e23;
}

#navbar li:first-child a {
  border-radius: 5px 0 0 5px;
}

#navbar li:last-child a {
  border-radius: 0 5px 5px 0;
}
</style>
