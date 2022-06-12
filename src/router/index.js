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
  {
    path: "/add-patient",
    name: "addPatient",
    component: () => import("@/views/Add/Patient.vue"),
  },
  {
    path: "/add-case",
    name: "addCase",
    component: () => import("@/views/Add/Case.vue"),
  },
  {
    path: "/patient/:pid",
    name: "patient",
    component: () => import("@/views/PatientView.vue"),
  },
  {
    path: "/pdf/:cid",
    name: "PDF",
    component: () => import("@/views/PDFView.vue"),
  },
  {
    path: "/video/:cid",
    name: "video",
    component: () => import("@/views/VideoView.vue"),
  },
  {
    path: "/image/:cid",
    name: "image",
    component: () => import("@/views/imageView.vue"),
  },
  {
    path: "/test",
    name: "testpage",
    component: () => import("@/views/testPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
