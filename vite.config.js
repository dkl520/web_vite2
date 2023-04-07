import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require("path");
const resolve = function(dir) {
  return path.join(__dirname, dir);
};
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
  // config: loadEnv(mode, './'),
  server: {
    host:'0.0.0.0',
    // port:'9000',
     //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {
        '/api': {
            target: 'http://172.25.23.88:9000/',// 你要请求的后端接口ip+port
            changeOrigin: true,// 允许跨域，在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
            ws: true,// 开启webSocket
            secure:true,
            pathRewrite: {
                // '^/api': ''// 替换成target中的地址
                '^/api': '/api'
            }
        }
    }
}
})
