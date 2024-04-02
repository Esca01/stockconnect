<template>
  <div>
    <div id="app">
      <Navbar />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <div id="login-container">
      <section>
        <h2>Iniciar sesión</h2>
        <section>
          <label for="email">Email </label>
          <input id="email" type="text" v-model="User.email" />
          <br /><br />

          <label for="password">Contraseña </label>
          <input id="password" type="password" v-model="User.password" />
          <br /><br />
          <nav>
            <router-link to="/login">
              <button
                id="login-button"
                @click="this.$store.dispatch('actualizarUsuario', User)"
              >
                Entrar
              </button>
            </router-link>
          </nav>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    let User = {
      email: "",
      password: "",
      isAdmin: false, // Añade esta línea
    };
    return {
      User,
    };
  },
};
</script>

<style scoped>
#login-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
}

#login-container h2 {
  text-align: center;
}

#login-container label {
  display: block;
  margin-bottom: 0px;
}

#login-container input {
  width: 93%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 0px;
}

#login-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#login-button:hover {
  background-color: #0056b3;
}

.fade-enter-active {
  transition: opacity 0.5s ease-in-out;
  transition-delay: 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
