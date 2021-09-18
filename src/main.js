import { createApp } from 'vue'

import router from './router.js'
import services from './modules/services.js'

import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(services)
console.log(app)
app.mount('#app')
