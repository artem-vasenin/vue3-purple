import {createRouter, createWebHistory} from "vue-router";

const routerOps = {
    routes: [
        { path: '/', component: () => import('./pages/Auth.vue') },
        { path: '/categories', component: () => import('./pages/Categories.vue'), children: [
            { path: '', component: () => import('./pages/Greeting.vue') },
            { path: ':alias', component: () => import('./pages/Category.vue') }
        ] },
    ],
    history: createWebHistory(),
}

export const router = createRouter(routerOps);