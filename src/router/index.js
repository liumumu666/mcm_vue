import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from "@/views/Home";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        components: {
            isApp: Login
        }
    },
    {
        path: '/home',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        //component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
        components: {
            isApp: Home
        },
        children: [{
            path: '/test',
            name: 'Test',
            component: () => import('@/views/Test.vue')
            },
            {
                path: '/allUsers',
                name: 'allUsers',
                component: () => import('@/views/AllUsers.vue')
            },


        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
