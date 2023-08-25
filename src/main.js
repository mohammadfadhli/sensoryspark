import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from "./views/Login.vue";

const routes = [
    {path: "/login", component: Login}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(createPinia())

app.use(router)

app.mount('#app')
