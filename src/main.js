import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./router";
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueNumber from 'vue-number-animation'

Vue.use(VueYouTubeEmbed)
Vue.use(VueNumber)
Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')