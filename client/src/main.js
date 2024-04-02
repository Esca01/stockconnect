import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js"; // Importa directamente la instancia del enrutador desde el archivo router.js
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
