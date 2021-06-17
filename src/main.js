import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

const app = createApp(App).use(router);
//store created with vuex
app.use(store);
app.mount("#app");
