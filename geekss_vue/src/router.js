import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ElementDemo from './components/ElementDemo'
import List from "@/views/List";
import Detail from "@/views/Detail";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/element',
      component:ElementDemo
    },{
      path:'/list/:id',
      component:List
    },{
      path:'/details/:id',
      component:Detail
    }
  ]
})
