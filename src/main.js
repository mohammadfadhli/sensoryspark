import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebaseConfig";
import { useFirebaseStore } from './stores/firebasestore.js';
import App from "./App.vue";

const routes = [
    { 
        path: "/", 
        name: "login",
        component: () => import("./views/Login.vue")
    },
    { 
        path: "/signUp", 
        name: "signUp",
        component: () => import("./views/SignUp.vue") 
    },
    {
        path: "/puzzle",
        name: "puzzle",
        component: () => import("./views/Puzzle.vue"),
    },
    { 
        path: "/tutorgpt", 
        name: "tutorgpt",
        component: () => import("./views/TutorGPT.vue"), 
    },
    {
        path: "/parentsforum",
        name: "parentsforum",
        component: () => import("./views/parentsForum.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


const app = createApp(App);

app.use(createPinia());

export default router;

app.use(router);

app.mount("#app");
