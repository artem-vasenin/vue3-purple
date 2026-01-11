import { createRouter, createWebHistory } from "vue-router";

import PageCategory from "./pages/PageCategory.vue";
import PageHome from "./pages/PageHome.vue";
import AuthView from "./views/AuthView.vue";
import MainView from "./views/MainView.vue";

export const router = createRouter({
  routes: [
    {path: '/', component: AuthView, name: 'auth'},
    {path: '/category', component: MainView, children: [
      {path: '', component: PageHome, name: 'cat'},
      {path: 'devOps', component: PageCategory},
    ]},
  ],
  history: createWebHistory(),
});
