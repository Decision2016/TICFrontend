import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/front/home'
import Dashboard from '@/views/admin/Dashboard'
import Index from '@/views/admin/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Dashboard,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: Index
        }
      ]
    }
  ]
})
