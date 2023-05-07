import {createRouter, createWebHistory} from "vue-router";
import MainLayout from "../layouts/MainLayout";
import HomeView from "@/views/Dashboard";
import About from "@/views/modules/about/views/Index";
import ConfigError from "@/views/modules/errors/provider/config";

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
                component: () => import("../views/modules/about/views/Create"),
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
                component: () => import("../views/modules/about/views/Edit"),
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
    {
        path: '/500',
        name: ConfigError.router.e500,
        component: require('../views/modules/errors/views/500.vue').default,
        beforeEnter: (to, from, next) => {
            document.body.className = '';
            next();
        },
    },
    {
        path: '/404',
        name: ConfigError.router.e404,
        component: require('../views/modules/errors/views/404.vue').default,
        beforeEnter: (to, from, next) => {
            document.body.className = '';
            next();
        },
    },
    {
        path: '/401',
        name: ConfigError.router.e401,
        component: require('../views/modules/errors/views/401.vue').default,
        beforeEnter: (to, from, next) => {
            document.body.className = '';
            next();
        },
    },
    {path: '/:pathMatch(.*)*', name: 'not-found', component: import("../views/modules/errors/views/404.vue")},
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
