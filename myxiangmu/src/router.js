import Vue from 'vue'
import Router from 'vue-router'
// import User from './views/User.vue'
// import UserNoLogin from '@/components/user/NoLogin'
// import UserLogin from '@/components/user/Login'
// import Home from './views/Home.vue'
// import Cart from './views/Cart.vue'
// import Kind from './views/Kind.vue'
// import Footer from '@/components/common/Footer'
// import Detail from './views/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import('./views/Register')
      }
    },
    {
      path: '/rlogin',
      name: 'rlogin',
      components: {
        default: () => import('./views/Rlogin')
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      components: {
        // default: Detail
        default: () => import('./views/Detail')
      }
    },
    {
      path: '/home',
      name: 'home',
      alias: '/h', // /h--加载的首页的组件
      components: {
        // default: Home,
        // footer: Footer
        default: () => import('./views/Home'),
        footer: () => import('@/components/common/Footer')
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/kind',
      name: 'kind',
      components: {
        // default: Kind
        default: () => import('./views/Kind')
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        // default: User,
        // footer: Footer
        default: () => import('./views/User'),
        footer: () => import('@/components/common/Footer')
      },
      children: [
        // {
        //   path: '/',
        //   redirect: 'nologin'
        // },
        {
          path: 'nologin',
          // component: UserNoLogin
          component: () => import('@/components/user/NoLogin')
        },
        {
          path: 'login',
          // component: UserLogin
          component: () => import('@/components/user/Login')
        }
      ]
      // beforeEnter (to, from, next) {
      //   // console.log(to)
      //   // console.log(from)
      //   if (to.path !== '/user/login' && to.path !== '/user/nologin') {
      //     if (localStorage.getItem('isLogin') === 'ok') {
      //       next('/user/login')
      //     } else {
      //       next('/user/nologin')
      //     }
      //   } else {
      //     next()
      //   }
      // }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        // default: Cart
        default: () => import('./views/Cart')
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
