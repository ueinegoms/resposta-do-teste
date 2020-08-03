import Vue from "vue";
import VueRouter from "vue-router";
import Lista from "../views/Lista.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Lista",
    component: Lista,
    // props: true
  },
  {
    path: "/id/:id",
    name: "Lista",
    component: Lista,
    props: true
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cadastro.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
