<template>
  <div id="app" class="container">
    <header-comp></header-comp>
    
    <nav-comp v-bind:userstatus="status"></nav-comp>
    <div class="row">
    <left-comp v-bind:member="loginUser" v-on:login-result="loginStatus"></left-comp>
    <div class="col-md-9">
    <router-view  v-on:login-result="loginStatus" v-bind:member="loginUser"> </router-view>
    </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import LoginClassic from './components/user/LoginClassic.vue'
export default {
  name: 'app',
  data(){ 
    return {
      status:'',
      isLogin:false,
      loginUser:{
        nick:''
      }
    }
  },
  components: {
    'header-comp':Header,
    'nav-comp':Nav,
    'left-comp':LoginClassic
  },
  methods:{
    loginStatus:function(val){
      this.isLogin=(val!=null)? true:false;
      this.status=(val!=null)? val+"님 로그인 중...":"";
      this.loginUser.nick=(val!=null)? val:'';
      if(val!=null){
        sessionStorage.setItem('isLogin',true);
      }else{
        sessionStorage.setItem('isLogin',false);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
