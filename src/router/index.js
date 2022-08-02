import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/pages/LandingPage.vue";
import Cancel from "../views/pages/Cancel.vue";
import Completed from "../views/pages/Completed.vue";
import Fundraiser from "../views/pages/Fundraiser.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingPage
  },
  {
    path: "/cancel",
    name: "cancel",
    component: Cancel
  },
  {
    path: "/completed",
    name: "completed",
    component: Completed
  },
  {
    path: "/fundraiser",
    name: "fundraiser",
    component: Fundraiser
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;