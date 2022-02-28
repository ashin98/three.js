import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import router from './router/index'

const app = createApp(App)
app.use(router).mount('#app')
