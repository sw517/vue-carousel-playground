import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'

Vue.config.productionTip = false
// Vue.use(VueCarousel);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
