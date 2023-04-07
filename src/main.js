import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import { createRouter, createWebHashHistory } from 'vue-router'; // 引入 VueRouter 库

// import Login from './views/login/index.vue'

// const routes= [
//   {
//     path:'/',
//     redirect:'/login'
//   },
//   {
//     path:'/login',
//     component: Login // 修改为 Login 组件
//   }
// ];

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// });

const app = createApp(App);
app.use(ElementPlus);

// app.use(router);
app.mount("#app");
