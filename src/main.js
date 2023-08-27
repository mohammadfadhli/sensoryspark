import "./assets/main.css";

import { onAuthStateChanged } from 'firebase/auth';
import { createPinia } from "pinia";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { auth } from '../firebaseConfig';
import App from "./App.vue";

const routes = [
    { 
        path: "/", 
        name: "login",
        component: () => import("./views/Login.vue"),
        meta: {
            requiresVisitor: true
        }
    },
    { 
        path: "/signUp", 
        name: "signUp",
        component: () => import("./views/SignUp.vue"),
        meta: {
            requiresVisitor: true
        }
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
        ],
        meta: {
            requiresAuth: true,
        }
    },
    { 
        path: "/tutorgpt", 
        name: "tutorgpt",
        component: () => import("./views/TutorGPT.vue"),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/parentsforum",
        name: "parentsforum",
        component: () => import("./views/parentsForum.vue"),
    },
    {
        path: "/math",
        name: "math",
        component: () => import("./views/Math.vue"),
        meta: {
            requiresAuth: true,
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            auth,
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        )
    })
}

router.beforeEach(async (to, from, next) => {
    if(to.matched.some((record) => record.meta.requiresAuth)){
        if(await getCurrentUser()) {
            next();
        }
        else
        {
            next("/");
        }
    }
    else if (to.matched.some(record => record.meta.requiresVisitor)){
        if(await getCurrentUser()) {
            next("/puzzle");
        }
        else
        {
            next();
        }
    }
    else
    {
        next();
    }
})


const app = createApp(App);

app.use(createPinia());

app.use(router);

app.mount("#app");

export default router;
