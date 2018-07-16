import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import Home from '@/components/home/Home'
import Index from '@/components/home/index'
import Cash from '@/components/home/cash'
import Archives from '@/components/home/archives'
import Refer from '@/components/home/refer'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'home',
      component: Home,
      children: [
        {path: '/home',  component: Index},
        {path: '/home/cash',  component: Cash},
        {path: '/home/archives',  component: Archives},
        {path: '/home/refer',  component: Refer},
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '*',
      component: Login
    }
  ]
})