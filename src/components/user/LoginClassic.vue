<template>
<div  class="col-md-3 mt-5">
    <div>
        <h1>Login </h1>
        <template>
                <div class="text-danger">{{msg}} </div>
        </template>
        <template v-if="!isLogin">
        <form name="loginF" action="login.jsp" v-on:submit.prevent="loginCheck">
        <div class="row">    
            <div class="col-md-10 offset-md-1">
                
                User ID <input type="text" name="userId" v-model="tmpUser.id" ref="userId"
                placeholder="User ID" class="form-control" >    
            </div>
        </div>
        <div class="row"> 
            <div class="col-md-10 offset-md-1">
                PASSWORD: <input type="password" name="userPwd" v-model="tmpUser.pwd" ref="userPwd"
                placeholder="Password" class="form-control">    
            </div>
        </div>
        <div class="col-md-10 offset-md-1 p-1">
                <button class="btn btn-block btn-primary mt-3">Login</button>
        </div>        
        </form> 
        </template>   
        <template v-else>
            <div  class="alert alert-primary m-4">
                <h4 class="text-primary"> {{user.uid}} 님 로그인 중... </h4>
                <a @click="logout">로그아웃</a>
            </div>
        </template>    
    </div>
    
   </div> 
</template>

<script>
   import axios from 'axios';
    export default {
        data(){
            return {
                tmpUser:{ //로그인 시도를 하는 사람의 아이디와 비번 담을 변수
                    id:'',
                    pwd:''
                },
                user:{ //로그인한 사람 정보를 담을 변수
                    uidx:'',
                    uname:'',
                    uid:''
                },
                msg:'',
                isLoginProcess:false,
                isLoginFail:false,
                isLogin:false
            }
        },
        watch:{
            'isLogin'(){
               this.user=this.getUserData();
               console.log("watch>>")
           }
        },
        created(){
           this.user= this.getUserData();
        },
        methods:{
            loginCheck(){
                if(!this.tmpUser.id){
                    alert('아이디를 입력하세요'); 
                    return;
                }
                if(!this.tmpUser.pwd){
                    alert('비밀번호를 입력하세요');
                    return;
                }
                this.requestLogin();
            },
            requestLogin(){
                let url="http://localhost:9090/VueBackend/loginCheck.jsp";
                let params=new URLSearchParams();
                params.append('id',this.tmpUser.id);
                params.append('pwd',this.tmpUser.pwd);
             
                axios.post(url,params)
                    .then((response)=>{
                        console.log(response)
                       // alert(">>"+response.data.data.idx)
                        if(!response.data.data.idx){
                            alert('아이디, 비밀번호를 확인하세요');
                            this.$refs.userId.focus();
                            this.tmpUser.id='',
                            this.tmpUser.pwd='';
                            this.isLoginFail=true;
                            this.isLogin=false;
                            return;
                        }else{
                            alert(typeof response.data.data)
                            this.user=response.data.data;
                            sessionStorage.setItem('uname',this.user.name);
                            sessionStorage.setItem('uid',this.user.id);
                            sessionStorage.setItem('uidx',this.user.idx);
                            this.isLoginFail=false;
                            this.isLogin=true;
                            
                        }
                    })
                    .catch((err)=>{
                        alert("error: "+err.message);
                    })
                    
            },
            getUserData(){
            let uid=sessionStorage.getItem('uid');
            let uidx=sessionStorage.getItem('uidx');
            let uname=sessionStorage.getItem('uname');
            
            if(uid==undefined||uid===""){
                this.isLogin=false;
            }else{
                this.isLogin=true;
                
            }
            console.log(this.user);
            this.user={'uid':uid,'uidx':uidx,'uname':uname};
            return this.user;
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
              if(user.name!==this.tmpUser.id){
                  this.msg="닉네임이 틀려요!"
                  return;
              }
              if(user.pwd!==this.tmpUser.pwd){
                  this.msg="비밀번호가 틀려요";
                  return;
              }
              this.msg=''
                this.$emit('login-result',this.tmpUser.id);
                this.$router.push('/')
            },
            logout(){
                let url="http://localhost:9090/VueBackend/logout.jsp"
                axios.post(url).then((res)=>{
                    console.log(res);
                    if(res.status==200){
                       // alert('a')
                        sessionStorage.clear();
                        this.isLogin=false;
                    }
                }).catch((err)=>{
                    alert('error: '+err.message)
                    this.isLogin=true;
                })
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>