
import Vue from 'vue'

import VueRouter from 'vue-router'

import Login from '../view/login/index.vue'
const Login = () => import('../view/login/index')

Vue.use(VueRouter)
const routes= [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      component: Login // 修改为 Login 组件
    }
  ];

//  {
//     path:"/register",
//     name :'register',

//  },
//  {
//     path:"/findPassword",
//     name:"findPassword",
//     // component: 
//  },
//  {
//     path:"*",
//     name "page404",

//  },
//  {
//     path :'/dashBoard',
//     name:'dashBoard',

//  }
const router = VueRouter.createRouter({
    routes
})



export default router;