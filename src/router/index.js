import {createRouter, createWebHistory} from "vue-router";
import MainLayout from "../layouts/MainLayout";
import HomeView from "@/views/HomeView";
import About from "@/views/AboutView";

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: HomeView
            },
        ]
    },
    {
        path: '/',
        component: About,
        name: 'about',
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
