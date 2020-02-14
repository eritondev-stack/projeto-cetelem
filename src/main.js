import Vue from 'vue'
import App from './App.vue'
import './plugins/axios'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false


import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

import './filtros'

new Vue({  
  router,
  render: h => h(App)
}).$mount('#app')
