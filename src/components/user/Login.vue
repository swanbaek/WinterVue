<template>
    <div class="container p-5">
        <h1>Login</h1>
                <div class="text-danger">{{msg}} </div>
        <form name="loginF" action="login.jsp" v-on:submit.prevent="loginCheck2">
        <div class="row">    
            <div class="col-md-6 offset-md-3">
                
                Nick Name: <input type="text" name="id" v-model="loginUser.id"
                placeholder="User ID" class="form-control" >    
            </div>
        </div>
        <div class="row"> 
            <div class="col-md-6 offset-md-3">
                PASSWORD: <input type="password" name="pwd" v-model="loginUser.pwd"
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
import axios from 'axios';
    export default {
        data(){
            return {
                loginUser:{
                    id:'',
                    pwd:''
                },
                msg:'',
                isLoginProcess:false,
                isLoginFail:false,
            }
        },
        methods:{
            loginCheck(){
                if(!this.loginUser.id){
                    alert('아이디를 입력하세요');
                    return;
                }
                if(!this.loginUser.pwd){
                    alert('비밀번호를 입력하세요');
                    return;
                }
                this.requestLogin();
            },
            requestLogin(){
                let url="http://localhost:9090/VueBackEnd/loginCheck.jsp";
                let params=new URLSearchParams();
                params.append('id',this.loginUser.id);
                params.append('pwd',this.loginUser.pwd);
                axios.post(url,params)
                    .then((response)=>{
                        alert(response.data)
                    })
                    .catch((err)=>{
                        alert(err.message);
                    })
            },
            loginCheck_old:function(){
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