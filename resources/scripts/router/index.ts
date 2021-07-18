import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/pages/Home.vue'
import Dashboard from '@/views/pages/Dashboard.vue'

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/dashboard',
        component: Dashboard,
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})
