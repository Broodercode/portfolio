import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import LoadScript from 'vue-plugin-load-script';

Vue.use(LoadScript)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
