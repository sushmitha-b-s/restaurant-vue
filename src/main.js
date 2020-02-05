import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import apolloProvider from './apollo'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

Vue.use(Vuelidate)

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
