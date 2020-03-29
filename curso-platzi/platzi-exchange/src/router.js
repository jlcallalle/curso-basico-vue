import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Error from '@/views/Error'
import About from '@/views/About'

Vue.use(Router)

export default new Router({
  mode: 'history', //utiliza el history mode de html

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})
