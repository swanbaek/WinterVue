<template>
  <div id="app" class="container">
    <header-comp></header-comp>
    <nav-comp v-bind:userstatus="status"></nav-comp>
    <router-view  v-on:login-result="loginStatus"> </router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
export default {
  name: 'app',
  data(){
    return {
      status:''
    }
  },
  components: {
    'header-comp':Header,
    'nav-comp':Nav
  },
  methods:{
    loginStatus:function(val){
      
      this.status=(val!=null)? val+"님 로그인 중...":"";
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
