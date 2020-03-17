import Vue from 'vue'
import Router from 'vue-router'
//import Hometest from './views/Home.vue'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Article from '@/components/Article'
import Home from '@/components/Home'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      redirect: '/login'
    }
  //  {
    //  path: '/abouttest',
      //name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    //}
  ]
})
