import Vue from 'vue'
import Router from 'vue-router'
//import Hometest from './views/Home.vue'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Article from '@/components/Article'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Edition from '@/components/Edition'
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
      path: '/edition',
      name: 'Edition',
      component: Edition,
      beforeEnter: (to, from, next) => {          
        axios
          .get(process.env.VUE_APP_URLAPI + "check", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem('token')
            }
          })
          .then(response=> {
            console.log(response);
            next();  
          })
          .catch(error => {
            console.log(error);
            localStorage.removeItem('token');
            next('/login');
          })
        


      //   if (store.state.token == false || from.path != '/edition') {
      //     next('/login');
      //   }
      // next();     

      }
    },

    {
      path: '*',
      name: 'Home',
      component: Home
    },


    
 
  ]
})
