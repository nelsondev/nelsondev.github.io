
import App from './App.vue'
import { createApp } from 'vue'
import vuetify from '@/plugins/vuetify'

const vue = createApp(App)

vue.use(vuetify)
vue.mount("#app")