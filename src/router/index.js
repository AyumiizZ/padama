import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
  },
  {
    path: "/signin",
    name: "signin",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/SignInView.vue"),
  },
  {
    path: "/pid-search",
    name: "pidsearch",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Search/ByCaseID.vue"),
  },
  {
    path: "/cid-search",
    name: "cidsearch",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Search/ByPatientID.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
