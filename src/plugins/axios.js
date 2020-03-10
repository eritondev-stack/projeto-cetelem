import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = "http://apiprojetos-com.umbler.net/"

Vue.use({
    install(Vue){
        
        Vue.prototype.$http = axios
    }
})