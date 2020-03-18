import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/new',
    name: 'New',
    component: () => import('../views/New.vue'),
    // beforeEnter(to,from,next){

    // }
  },
  {
    path: '/',
    name: 'Home',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    component: () => import('../views/Home.vue'),
    props: true
  },
  {
    path: '/register',
    name: 'Register',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    component: () => import('../views/Login.vue'),
    props: true
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    component: () => import('../views/Edit.vue'),
    props: true
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//     next()
// });

export default router
