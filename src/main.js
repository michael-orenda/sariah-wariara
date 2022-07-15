import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
