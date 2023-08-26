import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";
import TutorGPT from "./views/TutorGPT.vue";
import parentsForum from "./views/parentsForum.vue";
import './assets/main.css'

const routes = [
    { 
        path: "/login", 
        name: "login",
        component: Login 
    },
    { 
        path: "/signUp", 
        name: "signUp",
        component: SignUp 
    },
    { 
        path: "/tutorgpt", 
        name: "tutorgpt",
        component: TutorGPT 
    },
    {
        path: "/parentsforum",
        name: "parentsforum",
        component: parentsForum
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
