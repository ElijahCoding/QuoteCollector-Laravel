import { createApp } from 'vue'
import App from '@/views/App.vue'
import router from '@/scripts/router'
import '@/css/app.css'

createApp(App).use(router).mount('#app')
