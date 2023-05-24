import { createPinia } from 'pinia'
import { createApp } from 'vue'

import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import App from './App.vue'
import './assets/custom.css'
import './assets/style.css'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
