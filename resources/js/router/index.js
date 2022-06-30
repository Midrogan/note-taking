import { createRouter, createWebHistory } from 'vue-router'

import Index from '../pages/Index.vue'
import Signup from '../pages/Signup.vue'
import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import Workspace from '../pages/Workspace.vue'

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

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x_xsrf_token')
    if (!token) {                
        if (to.name === 'login' || to.name === 'signup' || to.name === 'index') {
            return next()
        } else {
            return next({
                name: 'login'
            })
        }
    }

    if (to.name === 'login' || to.name === 'signup' && token){
        return next({
            name: 'dashboard'
        })
    }

    next();
})

export default router