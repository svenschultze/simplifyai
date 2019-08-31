import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import VueJsonp from 'vue-jsonp'

Vue.use(VueJsonp)
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Main',
        component: Main
    }]
})
