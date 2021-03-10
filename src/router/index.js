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
                component: () => import('@/views/user/AllUsers.vue')
            }, {
                path: "/allJobs",
                name: "allJobs",
                component: () => import('@/views/user/AllJobs.vue')
            }, {
                path: "/addUser",
                name: "addUser",
                component: () => import('@/views/user/AddUser.vue')
            }, {
                path: "/mcm",
                name: "mcm",
                component: () => import('@/views/Mcm.vue')
            }, {
                path: "/show",
                name: "show",
                component: () => import('@/views/Show.vue')
            }, {
                path: "/application",
                name: "application",
                component: () => import('@/views/application/StartLeave.vue')
            }, {
                path: "/myLeave",
                name: "myLeave",
                component: () => import('@/views/application/MyLeave.vue')
            }, {
                path: "/none",
                name: "none",
                component: () => import('@/views/None.vue')
            }, {
                path: "/myTask",
                name: "myTask",
                component: () => import('@/views/MyTask/MyTask.vue')
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
