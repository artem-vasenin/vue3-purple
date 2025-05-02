import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home.vue";
import Category from "@/pages/Category.vue";

const routerOps = {
    routes: [
        { path: '/', component: Home },
        { path: '/category/:alias', component: Category },
    ],
    history: createWebHistory(),
}

export const router = createRouter(routerOps);