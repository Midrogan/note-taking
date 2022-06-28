import { createRouter, createWebHistory } from 'vue-router'

import Index from '../components/Index.vue'
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import Workspace from '../components/Workspace.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/workspace',
        name: 'workspace',
        component: Workspace
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router


// const Home = () => import('./components/Home.vue');
// const One = () => import('./components/One.vue');


// const routes = [
//     {
//         path: '/',
//         name: 'home',
//         components: Home
//     },

//     {
//         path: '/one',
//         name: 'one',
//         components: One
//     },
// ]

// const router = createRouter({
//     routes,
//     history: createWebHistory()
//     history: createWebHistory(process.env.BASE_URL)
// })

// export default router