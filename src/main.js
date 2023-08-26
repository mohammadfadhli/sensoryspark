import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Login from "./views/Login.vue";
import TutorGPT from "./views/TutorGPT.vue";
import './assets/main.css'

const routes = [
    { 
        path: "/login", 
        name: "Login",
        component: Login 
    },
    { 
        path: "/tutorgpt", 
        name: "TutorGPT",
        component: TutorGPT 
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);

app.use(createPinia());

app.use(router);

app.mount("#app");
