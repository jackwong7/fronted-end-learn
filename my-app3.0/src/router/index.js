import { createRouter, createWebHashHistory } from 'vue-router'
const deepOnePages = import.meta.glob('../views/*.vue')
const routes = [
  {
    path: '/',
    component: deepOnePages['../views/Main.vue'],
    name: 'home1',
    redirect: '/home',
    // children: [
    //   {
    //     path: '/home',
    //     name: 'home',
    //     component: modules['../views/home/Home.vue']
    //   },
    //   {
    //     path: '/user',
    //     name: 'user',
    //     component: modules['../views/User/User.vue']
    //   },
    //   {
    //     path: '/page1',
    //     name: 'page1',
    //     component: modules['../views/Page1.vue']
    //   },
    //   {
    //     path: '/page2',
    //     name: 'page2',
    //     component: modules['../views/Page2.vue']
    //   }
    // ],
    children: []
  },
  {
    path: '/login',
    name: 'login',
    component: deepOnePages['../views/Login.vue']
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
