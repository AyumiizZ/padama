import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("@/views/SignInView.vue"),
  },
  {
    path: "/cid-search",
    name: "cidsearch",
    component: () => import("@/views/Search/ByCaseID.vue"),
  },
  {
    path: "/pid-search",
    name: "pidsearch",
    component: () => import("@/views/Search/ByPatientID.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
