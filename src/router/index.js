import {createRouter, createWebHashHistory} from 'vue-router'
const routes = [
    {
        path:'/',
        name:'Home',
        component:()=>import('../views/Home/index.vue')
    },
    {
        path:'/product',
        name:'Product',
        component:()=>import('../views/products/index.vue')
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router