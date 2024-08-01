import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from './router.js' // router.js 에서 import

createApp(App).use(Router).mount('#app') // 라우팅을 위해서 use.(Router) 추가해주기
