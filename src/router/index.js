import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SurpriseView from '../views/SurpriseView.vue'
import CallbackView from '../views/CallbackView.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/surprise',
            name: 'surprise',
            component: SurpriseView
        },
        {
            path: '/callback',
            name: 'callback',
            component: CallbackView
        }
    ]
})

export default router
