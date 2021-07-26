import { createApp } from 'vue'
import App from '@/views/App.vue'
import router from '@/scripts/router'
import store from '@/scripts/store'
import '@/css/app.css'

createApp(App).use(router).use(store).mount('#app')
