import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path:'/',
        component: () => import("../views/HomePage.vue"),
    },{
        path: '/login',
        component: () => import("../views/LoginPage.vue"),
    }, {
        path: "/signup",
        component: () => import("../views/SignupPage.vue")
    }
]

let router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;