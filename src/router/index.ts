import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import DashboardPage from "../pages/DashboardPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardPage,
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../pages/ListPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
