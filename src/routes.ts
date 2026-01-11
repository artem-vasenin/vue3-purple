import { createRouter, createWebHistory } from "vue-router";


export const router = createRouter({
  routes: [
    {path: '/', component: () => import('./views/AuthView.vue'), name: 'auth'},
    {path: '/category', component: () => import('./views/MainView.vue'), children: [
      {path: '', component: () => import('./pages/PageHome.vue'), name: 'cat'},
      {path: 'devOps', component: () => import('./pages/PageCategory.vue')},
    ]},
  ],
  history: createWebHistory(),
});
