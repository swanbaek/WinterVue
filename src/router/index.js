import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../components/Home.vue'
import NotFound from '../components/NotFound.vue'
import MemoApp from '../components/MemoApp.vue'
import SignUp from '../components/user/SignUp.vue'
import Login from '../components/user/Login.vue'
import LogOut from '../components/user/LogOut.vue'
import UserList from '../components/user/UserList.vue'

import Board from '../components/board/Board.vue'
import Card from '../components/board/Card.vue'
import BoardClassic from '../components/board/BoardClassic.vue'
import LoginClassic from '../components/user/LoginClassic.vue'
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
            path:'/users',
            name:'UserList',
            component:UserList
        },
        {
            path:'/login',
            name:'Login',
            component:Login
        },
        {
            path:'/login_inc',
            name:'LoginClassic',
            component:LoginClassic
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
            path:'/boardclassic/:cpage',
            name:'BoardClassic',
            component:BoardClassic            
        },
        {
            path:'/*',
            name:'NotFound',
            component:NotFound
        }

    ]
})