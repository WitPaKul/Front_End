import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import navbar from './components/navbar.vue'
import footerbar from './components/footerbar.vue'

const app = createApp(App)
app.component('navbar', navbar)
app.component('footerbar', footerbar)
// app.config.globalProperties.$baseURL = "/backend"
app.use(router).mount('#app')
app.config.globalProperties.$baseURL = "http://localhost:5000"