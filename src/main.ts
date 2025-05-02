import { createApp } from "vue";
import {createPinia} from "pinia";

import App from "./App.vue";
import {router} from "@/routes.ts";

import "./assets/css/main.css";

createApp(App)
    .use(createPinia())
    .use(router)
    .mount("#app");
