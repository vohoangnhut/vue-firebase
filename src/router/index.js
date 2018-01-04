import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase';

import Hello from '../modules/Hello'
import Login from '../modules/Login'
import Logout from '../modules/Logout'
import SignUp from '../modules/SignUp'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    }
  ]
})


export default router
