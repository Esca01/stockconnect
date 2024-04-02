// eslint-disable-next-line no-unused-vars
import Vue from "vue";
import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    Persona: {
      nombre: "",
      apellido: "",
      edad: null,
      codigo: "",
    },

    Usuario: {
      email: "",
      password: "",
    },
  },
  getters: {
    getPersona(state) {
      return state.Persona;
    },
    getUser(state) {
      return state.Usuario;
    },
  },
  mutations: {
    actualizarPersona(state, newPerson) {
      state.Persona = newPerson;
    },
    actualizarUsuario(state, newUser) {
      state.Usuario = newUser;
    },
  },
  actions: {
    actualizarPersona({ commit }, newPerson) {
      // Se recibe el commit y el nuevo objeto persona a agregar
      commit("actualizarPersona", newPerson);
    },
    actualizarUsuario(context, User) {
      // Aquí iría el código para autenticar al usuario en el servidor
      // Cuando la autenticación sea exitosa, podrías actualizar el estado del usuario en la tienda
      context.commit("SET_USER", User);
      if (User.email === "root") {
        context.commit("SET_IS_ADMIN", true);
      }
    },
  },
  modules: {},
});
