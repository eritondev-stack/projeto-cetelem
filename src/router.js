import Vue from 'vue'
import Router from 'vue-router'

import Login from './pages/Login'
import App from './pages/App'
import Dashboard from './pages/Dashboard'
import Upload from './pages/Upload'
import Config from './pages/Config'
import Vermaisitgov from './pages/Vermaisitgov'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Login },
        {
            path: '/app', component: App, children: [
                { path: '/dashboard', component: Dashboard },
                { path: '/upload', component: Upload },
                { path: '/config', component: Config},
                { path: '/Vermaisitgov', component: Vermaisitgov}
            ]
        },
        { path: '*', redirect: '/' }
    ]

})