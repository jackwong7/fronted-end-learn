import Vue from 'vue'
import App from './App.vue'
// import { Row,Button } from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import './api/mock.js'
import Cookie from 'js-cookie'


Vue.config.productionTip = false
/* 
Vue.use(Row);
Vue.use(Button); */
Vue.use(ElementUI)


//添加全局前置导航守卫
router.beforeEach((to, from ,next)=>{
  //token存不存在
  const token = Cookie.get('token')
  //token不存在，说明当前用户未登录，应跳转至登录页面
  if(!token && to.name !== 'login'){
    next({ name:'login' })
  }else if(token && to.name == 'login'){    //token存在，说明用户已登录，此时应跳转至首页
    next({ name:'home' })
  }else{
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit('addMenu',router)
  },
}).$mount('#app')
