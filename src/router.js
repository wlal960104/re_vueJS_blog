import { createWebHistory, createRouter } from "vue-router"; // vue-router 라이브러리를 import 한다
import List from "@/components/List.vue";
import Home from "@/components/Home.vue";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/list",
    component: List,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;