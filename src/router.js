import Vue from 'vue'
import Router from 'vue-router'
//路由
import {
    Home
} from './views/index'

Vue.use(Router)
export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }]
})