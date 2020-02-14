import Vue from 'vue'

Vue.filter('arred', function (valor) {

    if (valor == null) {
        return 0
    } else {
        return valor.toFixed(0)
    }



})

