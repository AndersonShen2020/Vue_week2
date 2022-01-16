import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import products from "../components/products.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: products,
  },
];

const history = createWebHistory(process.env.BASE_URL);
// const history = createWebHashHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
