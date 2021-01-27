import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/front/home'
import Dashboard from '@/views/admin/Dashboard'
import Carousel from '@/views/admin/Carousel'
import Login from '@/views/admin/Login'
import Logout from '@/views/admin/Logout'
import Personnel from '@/views/admin/Personnel'
import Articles from '@/views/admin/Articles'
import Setting from '@/views/admin/Setting'
import Log from '@/views/admin/Log'
import storage from '@/utils/storage'
import Detail from '@/views/front/Detail'
import List from '@/views/front/List'
import NotFound from '@/views/front/404'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '主页',
        requiresAuth: false
      }
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      meta: {
        title: '文章详情',
        requiresAuth: false
      }
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      meta: {
        title: '文章列表',
        requiresAuth: false
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Dashboard,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: Log,
          meta: {
            title: '仪表盘',
            requiresAuth: true
          }
        },
        {
          path: 'carousel',
          name: 'carousel',
          component: Carousel,
          meta: {
            title: '轮播图管理',
            requiresAuth: true
          }
        },
        {
          path: 'personnel',
          name: 'personnel',
          component: Personnel,
          meta: {
            title: '成员管理',
            requiresAuth: true
          }
        },
        {
          path: 'articles',
          name: 'articles',
          component: Articles,
          meta: {
            title: '文章管理',
            requiresAuth: true
          }
        },
        {
          path: 'setting',
          name: 'setting',
          component: Setting,
          meta: {
            title: '设置',
            requiresAuth: true
          }
        },
        {
          path: 'log',
          name: 'log',
          component: Log,
          meta: {
            title: '日志记录',
            requiresAuth: true
          }
        }
      ],
      meta: {
        title: '后台',
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录',
        requiresAuth: false
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      meta: {
        title: '登出',
        requiresAuth: true
      }
    },
    {
      path: '/*',
      name: '404',
      component: NotFound,
      meta: {
        title: '404 Not Found',
        requiresAuth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log(storage.get('authed'))
    if (!storage.get('authed')) {
      next({
        name: 'Login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
  next()

  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
