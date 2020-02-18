<template>
    <nav class="navbar navbar-expand-sm bg-warning navbar-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
        
      <li class="nav-item">
          <router-link to="/" class="nav-link">HOME</router-link>
        <!-- <a class="nav-link" href="#">HOME</a> -->
      </li>
      <li class="nav-item">
         <router-link to="#"  class="nav-link  text-success" v-if="this.userstatus!==''">[{{userstatus}}]</router-link>
      </li>   
      <li class="nav-item">
         <router-link to="/login" class="nav-link" v-if="this.userstatus==''">Login</router-link>
         <router-link to="/logout" class="nav-link" v-if="this.userstatus!==''">Logout </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/signup" data-toggle="modal" class="nav-link">SignUp</router-link>
      </li> 
       <li class="nav-item">
        <router-link to="/users" class="nav-link">Users</router-link>
      </li>   
      <li class="nav-item">
        <router-link to="/memo" class="nav-link">Memo</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/board/1" class="nav-link">Board1</router-link>
      </li> 
      <li class="nav-item">
        <router-link to="/board/2" class="nav-link">Board2</router-link>
      </li>  
      <li class="nav-item">
        <router-link to="/boardClassic" class="nav-link">Board3</router-link>
      </li>    
    </ul>
  </div>  
</nav>
</template>

<script>
    export default {
      data(){
        return {
          
          }
      },
          props:['userstatus']
        
    }
</script>

<style lang="scss" scoped>

</style>