import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Main from "./components/Main.vue";

import "primevue/resources/themes/md-light-indigo/theme.css";

import PrimeVue from "primevue/config";

const app = createApp(App);
app.use(PrimeVue);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { name: "main", path: "/", component: Main, meta: { nav: true } },
    { name: "about", path: "/about", component: Main, meta: { nav: true } },
    { name: "career", path: "/career", component: Main, meta: { nav: false } },
  ],
});
app.use(router);

app.mount("#app");
