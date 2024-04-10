import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js"; // Importa directamente la instancia del enrutador desde el archivo router.js
import store from "./store";


import vueFlex from 'vue-flex'
import './assets/css/bootstrap.css'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.bundle.min'

createApp(App).use(store).use(router).use(vueFlex).mount("#app");
