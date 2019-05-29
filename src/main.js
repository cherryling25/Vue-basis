// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'  //引进路由
import VueResource from 'vue-resource' //引进http
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'


Vue.config.productionTip = false
Vue.use(VueRouter)  //使用路由
Vue.use(VueResource)  //使用http

//配置路由
const router = new VueRouter({
  routes:[
  {path:"/",component:Home},
  {path:"/helloworld",component:HelloWorld}
  ],
  mode:"history"
  })

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App }, 
  template: '<App/>'   //执行的组件
});
