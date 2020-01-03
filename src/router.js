import Vue from 'vue'
import Router from 'vue-router'

import Login from './components/Login'
import App from './components/App'
import Dashboard from './components/Dashboard'
import Upload from './components/Upload'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: Login},
        {path: '/app', component: App, children:[
            {path: '/dashboard', component: Dashboard },
            {path: '/upload', component: Upload }
        ]},
        {path: '*', redirect: '/'}
    ]

})