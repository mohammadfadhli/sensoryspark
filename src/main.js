import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import './assets/main.css'

const routes = [
    { 
        path: "/login", 
        name: "login",
        component: () => import("./views/Login.vue")
    },
    { 
        path: "/signUp", 
        name: "signUp",
        component: () => import("./views/SignUp.vue") 
    },
    {
        path: '/puzzle',
        name: 'puzzle',
        component: () => import('./views/Puzzle.vue'),
        children: [
          {
            path: 'easy',
            name: 'easy',
            component: () => import('./components/puzzle/Easy.vue')
          },
          {
            path: 'medium',
            name: 'medium',
            component: () => import('./components/puzzle/Medium.vue')
          },
          {
            path: 'hard',
            name: 'hard',
            component: () => import('./components/puzzle/Hard.vue')
          }
        ]
    },
    { 
        path: "/tutorgpt", 
        name: "tutorgpt",
        component: () => import("./views/TutorGPT.vue")  
    },
    {
        path: "/parentsforum",
        name: "parentsforum",
        component: () => import("./views/parentsForum.vue")
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
