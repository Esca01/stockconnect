import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import InicioView from "@/views/InicioView.vue";
import ProductoView from "@/views/ProductoView.vue";
import ProveedoresView from "@/views/ProveedoresView.vue";
import EnviosView from "@/views/EnviosView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LoginView,
  },
  {
    path: "/login",
    name: "login",
    component: InicioView,
  },

  {
    path: "/producto",
    name: "producto",
    component: ProductoView,
  },

  {
    path: "/proveedores",
    name: "proveedores",
    component: ProveedoresView,
  },

  {
    path: "/envios",
    name: "envios",
    component: EnviosView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
