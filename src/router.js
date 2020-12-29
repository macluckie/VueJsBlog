import Vue from 'vue'
import Router from 'vue-router'
//import Hometest from './views/Home.vue'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Article from '@/components/Article'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Edition from '@/components/Edition'
import Menu from '@/components/MenuBackOffice'

import store from './store'
import axios from "axios";


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
      path: '/menu',
      name: 'Menu',
      component: Menu,
      beforeEnter: (to, from, next) => {
        testToken(to,from,next);
      }
    },
    {
      path: '/edition',
      name: 'Edition',
      component: Edition,
      beforeEnter: (to, from, next) => {
        testToken(to,from,next);    
      }
    },
  ]
})

function testToken(to,from,next)
{
  axios
  .get(process.env.VUE_APP_URLAPI + "access", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem('token')
    }
  })
  .then(response => {
    next();
  })
  .catch(error => {
    localStorage.removeItem('token');
    next('/menu');
  })
    
}
