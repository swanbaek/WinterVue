<template>
    <div class="container p-5">
        <h1>Login</h1>
                <div class="text-danger">{{msg}} </div>
        <form name="loginF" action="login.jsp" v-on:submit.prevent="loginCheck">
        <div class="row">    
            <div class="col-md-6 offset-md-3">
                
                Nick Name: <input type="text" name="userNick" v-model="loginUser.nick"
                placeholder="Nick Name" class="form-control" >    
            </div>
        </div>
        <div class="row"> 
            <div class="col-md-6 offset-md-3">
                PASSWORD: <input type="password" name="userPwd" v-model="loginUser.pwd"
                placeholder="Password" class="form-control">    
            </div>
        </div>
        <div class="col-md-6 offset-md-3 p-1">
                <button class="btn btn-block btn-primary mt-3">Login</button>
        </div>        
        </form>    
    </div>
</template>

<script>
    export default {
        data(){
            return {
                loginUser:{
                    nick:'',
                    pwd:''
                },
                msg:''
            }
        },
        methods:{
            loginCheck:function(){
              //  alert('login');
              var user=JSON.parse(localStorage.getItem('vue-user'));
              alert((user))
              if(user.name!==this.loginUser.nick){
                  this.msg="닉네임이 틀려요!"
                  return;
              }
              if(user.pwd!==this.loginUser.pwd){
                  this.msg="비밀번호가 틀려요";
                  return;
              }
              this.msg=''
                this.$emit('login-result',this.loginUser.nick);
                this.$router.push('/')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>