import { createRouter, createWebHistory } from 'vue-router'

import Work from '../views/Work'
import Projects from '../views/Projects'
import Education from '../views/Education'
import Home from '../views/Home'

const routes = [
    {
        path: '/work',
        name: 'Work',
        component: Work
    },
    {
        path:'/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path:'/education',
        name: 'Education',
        component: Education
    },
    {
        path:'/',
        name:'Home',
        component: Home,
        props: (route) => ({
            query: route.query.response
        })
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router