import Vue from "vue";
import Router from "vue-router";

import { Work, About, Home, Detail, PageNotFound } from "../components";

Vue.use(Router);

export default new Router({
    mode: "history",
    history: true,
    base: __dirname,
    routes: [
        {
            path: "/404",
            name: "PageNotFound",
            component: PageNotFound
        },
        { 
            path: '*', 
            redirect: '/404' 
        },  
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/about",
            name: "About",
            component: About
        },
        {
            path: "/portfolio",
            name: "Portfolio",
            component: Work
        },
        {
            path: "/contact",
            name: "Contact",
            component: Work
        },
        {
            path: "/portfolio/:slug",
            name: "DetailPage",
            component: Detail,
            props:true
        },
    ]
});
