<template>
<div  class="col-md-3 mt-5">
    <div v-if="member.nick==''">
        <h1>Login test</h1>
                <div class="text-danger">{{msg}} </div>
        <form name="loginF" action="login.jsp" v-on:submit.prevent="loginCheck">
        <div class="row">    
            <div class="col-md-10 offset-md-1">
                
                Nick Name: <input type="text" name="userNick" v-model="loginUser.nick"
                placeholder="Nick Name" class="form-control" >    
            </div>
        </div>
        <div class="row"> 
            <div class="col-md-10 offset-md-1">
                PASSWORD: <input type="password" name="userPwd" v-model="loginUser.pwd"
                placeholder="Password" class="form-control">    
            </div>
        </div>
        <div class="col-md-10 offset-md-1 p-1">
                <button class="btn btn-block btn-primary mt-3">Login</button>
        </div>        
        </form>    
    </div>
    <div v-else style="background:#efefef;border-radius: 5px; height:150px;padding:1em">
        <h3 class="text-primary"> {{member.nick}}님 로그인 중... </h3>
    </div>
   </div> 
</template>

<script>
    export default {
        props:['member'],
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
              if(user==null){
                  alert('회원가입을 먼저 하세요');
                  this.$router.push('/signup');  
                  return;
              }
              //alert((user))
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