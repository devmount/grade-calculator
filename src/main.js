import Vue from 'vue'
import App from './App.vue'

// set local config
Vue.config.productionTip = false

// set global properties
Vue.prototype.$version = process.env.VUE_APP_VERSION

new Vue({
  render: h => h(App),
}).$mount('#app')
