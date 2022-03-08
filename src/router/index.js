import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/favourites",
    name: "favourites",
    component: () =>
      import(/* webpackChunkName: "favourites" */ "../views/FavouriteDogs.vue"),
  },
  {
    path: "/breed",
    name: "breed",
    component: () =>
      import(/* webpackChunkName: "breed" */ "../views/DogBreedPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
