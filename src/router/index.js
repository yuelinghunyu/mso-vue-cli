import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 引用页面组件
const Home = () => import('@/page/home/home.vue')
const Page1 = () => import('@/page/page1/page1.vue')

const routes = [
    {
        path: '/',
        redirect: '/home-view'
    },
    {
        path: '/home-view',
        component: Home
    },
    {
        path: '/page1-view',
        component: Page1
    }
]

export default new Router({
    routes: routes
})