import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { createRouter, createWebHistory } from "vue-router";
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
        meta: {
            requiresAuth: true,
        }
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
