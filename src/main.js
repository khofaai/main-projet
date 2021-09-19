import { createApp } from 'vue'

import router from './router.js'
import services from './services'

import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(services)
app.mount('#app')
