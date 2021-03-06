import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../components/Home.vue'
import NotFound from '../components/NotFound.vue'
import MemoApp from '../components/MemoApp.vue'
import SignUp from '../components/user/SignUp.vue'
import Login from '../components/user/Login.vue'
import LogOut from '../components/user/LogOut.vue'

import Board from '../components/board/Board.vue'
import Card from '../components/board/Card.vue'
Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    base:'/',
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/memo',
            name:'Memo',
            component:MemoApp
        },
        {
            path:'/signup',
            name:'SignUp',
            component:SignUp
        },
        {
            path:'/login',
            name:'Login',
            component:Login
        },
        {
            path:'/logout',
            name:'LogOut',
            component:LogOut
        },
        {
            path:'/board/:bno',
            name:'Board',
            component:Board,
            children:[
                {path:'card/:cno', component:Card}
            ]
        },
        {
            path:'/*',
            name:'NotFound',
            component:NotFound
        }

    ]
})