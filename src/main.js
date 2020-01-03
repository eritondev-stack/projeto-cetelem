import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './plugins/axios'
import router from './router'

Vue.config.productionTip = false


import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

new Vue({  
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
