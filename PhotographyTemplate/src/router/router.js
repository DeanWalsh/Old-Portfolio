import {
    createRouter,
    createWebHistory
} from "vue-router";
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Gallery from '../views/Gallery.vue';
import Contact from '../views/Contact.vue';

// Need to import the animate.js module

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: Home,
            meta: {
                enterClass: "animate__animated animate__fadeInLeft",
                leaveClass: "animate__animated animate__fadeOutRight",
            },
        },
        {
            path: '/about',
            component: About,
            meta: {
                enterClass: "animate__animated animate__fadeInLeft",
                leaveClass: "animate__animated animate__fadeOutRight",
            },
        },
        {
            path: '/gallery',
            component: Gallery,
            meta: {
                enterClass: "animate__animated animate__fadeInLeft",
                leaveClass: "animate__animated animate__fadeOutRight",
            },
        },
        {
            path: '/Contact',
            component: Contact,
            meta: {
                enterClass: "animate__animated animate__fadeInRight",
                leaveClass: "animate__animated animate__fadeOutLeft",
            },
        },
    ],
});

export default router;