import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/editor",
  },
  {
    path: "/editor",
    name: "editor",
    component: () => import("../views/Editor.vue"),
  },
  {
    path: "/survey",
    name: "survey",
    component: () => import("../views/Survey.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
