import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "./store/auth";


export const router = createRouter({
  routes: [
    {path: '/:pathMatch(.*)*', component: () => import('./views/404View.vue')},
    {path: '/', component: () => import('./views/AuthView.vue'), name: 'auth'},
    {path: '/category', component: () => import('./views/MainView.vue'), children: [
      {path: '', component: () => import('./pages/PageHome.vue'), name: 'cat'},
      {path: ':alias', component: () => import('./pages/PageCategory.vue')},
    ]},
  ],
  history: createWebHistory(),
});

router.beforeEach((to) => {
  const store = useAuthStore();
  if (!store.getToken && to.name !== 'auth') {
    return {name: 'auth'};
  }
})
