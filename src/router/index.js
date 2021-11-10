import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Chest from "../views/Cesta.vue";
import Favorites from "../views/Favorites.vue";
import History from "../views/Historial.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/chest",
    name: "Chest",
    component: Chest,
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites,
  },
  {
    path: "/history",
    name: "History",
    component: History,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
