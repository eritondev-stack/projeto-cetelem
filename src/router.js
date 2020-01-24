import Vue from 'vue'
import Router from 'vue-router'

import Login from './pages/Login'
import App from './pages/App'
import Dashboard from './pages/Dashboard'
import Upload from './pages/Upload'
import Config from './pages/Config'
import VerMaisGov from './pages/VerMaisGov'
import VerMaisCapacity from './pages/VerMaisCapacity'
import VerMaisProjetos from './pages/VerMaisProjetos'
import ProjetoSroll from './pages/ProjetoSroll'


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
                { path: '/vermaisgov', component: VerMaisGov},
                { path: '/vermaiscapacity', component: VerMaisCapacity},
                { path: '/vermaisprojetos', component: VerMaisProjetos},
                { path: '/projetosroll', component: ProjetoSroll}
            ]
        },
        { path: '*', redirect: '/' }
    ]

})