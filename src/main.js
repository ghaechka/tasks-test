import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

createApp(App).use(store).use(router).use(M).mount('#app')
