import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vue-weather/",
    name: "Home-weather-vue",
    component: Home,
  },
  {
    path: "/vue-weather/weather/:query",
    name: "Weather",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Weather.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
