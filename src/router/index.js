import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/front/home'
import Dashboard from '@/views/admin/Dashboard'
import Index from '@/views/admin/Index'
import Carousel from '@/views/admin/Carousel'
import Login from '@/views/admin/Login'
import Logout from '@/views/admin/Logout'
import Personnel from '@/views/admin/Personnel'
import Articles from '@/views/admin/Articles'
import Setting from '@/views/admin/Setting'

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
        },
        {
          path: 'carousel',
          name: 'Carousel',
          component: Carousel
        },
        {
          path: 'personnel',
          name: 'Personnel',
          component: Personnel
        },
        {
          path: 'articles',
          name: 'Articles',
          component: Articles
        },
        {
          path: 'setting',
          name: 'Setting',
          component: Setting
        }
      ]
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
    }
  ]
})
