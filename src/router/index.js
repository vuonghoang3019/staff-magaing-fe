import {createRouter, createWebHistory} from "vue-router";
import MainLayout from "../layouts/MainLayout";
import HomeView from "@/views/Dashboard";
import About from "@/views/modules/About/views/Index";

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
            {
                path: 'about',
                component: About,
                name: 'abouts',
                meta: {
                    title: 'Abouts',
                    image: '',
                    breadcrumbs: [
                        {text: 'Abouts'},
                    ],
                },
            },
            {
                path: 'about/create',
                name: 'About.Create',
                component: () => import("../views/modules/About/views/Create"),
                meta: {
                    title: 'Create Abouts',
                    image: '',
                    breadcrumbs: [
                        {text: 'Abouts'},
                        {text: 'Create Abouts'},
                    ],
                },
            },
            {
                path: 'about/edit/:id',
                name: 'About.Edit',
                component: () => import("../views/modules/About/views/Edit"),
                meta: {
                    title: 'Edit Abouts',
                    image: '',
                    breadcrumbs: [
                        {text: 'Abouts'},
                        {text: 'Edit Abouts'},
                    ],
                },
            },
        ]
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: import("../views/error/404") },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
