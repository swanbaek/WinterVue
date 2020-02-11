<template>
    <div>
        <div id="join" class="container p-3">
            <h1>SingUp</h1>
            <!--  회원가입 진행중 표시 -->
            <template v-if='isProcess == true'>
                <div  class="alert alert-success">
                    <h3 class="text-primary">처리 중...</h3>    
                </div>
			</template>
            <template v-else>
            <div v-if="isSignupFail"  class="alert alert-danger">
						<h3>회원가입 실패</h3>
						<p>아이디 중복 여부를 확인해주세요</p>
			</div>

            <form v-else name="frm" action="join.jsp" @submit.prevent="submit">
        <div class="row">    
            <div class="col-md-6 offset-md-3">
			
            Name: <input type="text" name="userName"
             placeholder="User Name" class="form-control" 
             v-model="user.name">                
            </div>
        </div> 
        <div class="row">    
            <div class="col-md-6 offset-md-3">   
            User ID: <input type="text" name="userId"
             placeholder="User ID" class="form-control" 
             v-model="user.id"
             v-on:keyup="checkNick">    
            <div v-if="nickErr" class="text-danger">닉네임은 4자이상 6자 이하 입니다.</div>
            </div>
        </div>
        <div class="row"> 
            <div class="col-md-6 offset-md-3">
                PASSWORD: <input type="text" name="userPwd" 
                placeholder="Password" class="form-control"
                v-model="user.pwd"  v-on:keyup="checkPwd">    
                <div v-if="pwdErr" class="text-danger">비밀번호는 4자 이상 8자 이내입니다.</div>
            </div>
        </div>
        <div class="row"> 
            <div class="col-md-6 offset-md-3">
                    PASSWORD Confirm :
                <input type="text" name="userPwd" placeholder="Password Confirm" class="form-control" v-on:keyup="checkRePwd">    
                <div v-if="pwdErr2" class="text-danger">비밀번호가 일치하지 않아요</div>
            </div>       
        </div> 
        <div class="row"> 
                <div class="col-md-6 offset-md-3">
                        Email :
                    <input type="text" v-model="user.email" name="userEmail" placeholder="Email" class="form-control">    
                </div>       
            </div> 
        <div class="row  m-2">
                <div class="col-md-6 offset-md-3 p-1">
                    <button class="btn btn-block btn-outline-success">Signup</buttoN>
                </div>
        </div>

        <div class="row m-5">
            <div class="col-md-6 offset-md-3">

            </div>
			
        </div>
        </form>
            </template> 
            <!-- isProcess==false -->
    </div>    
    </div>
</template>

<script>
import axios from 'axios';
    export default {
         data() {
             return{
                user:{
                    name:'',
                    id:'',
                    pwd:'',
                    email:''
                },
                nickErr:false,
                pwdErr:false,
                pwdErr2:false,
                isProcess:false,
                isSignupFail:false
            }
         },
            methods:{
                checkNick:function(e){
                    let nick=(e.target.value);
                    let len=nick.length;
                    if(len<4||len>6){
                        this.nickErr=true;
                    }else{
                        this.nickErr=false;
                    }
                },
                checkPwd:function(){
                    //let pw1=e.target.value;
                    let len=this.user.pwd.length;
                    this.pwdErr=(len<4||len>8)?true:false;
                },
                checkRePwd:function(e){
                    let pw2=e.target.value;
                    if(this.user.pwd!=pw2){
                        this.pwdErr2=true;
                    }else{
                        this.pwdErr2=false;
                    }

                },
                submit:function(){
                   // alert(this.user.name+"님 회원가입 처리 합니다.")
                   if(!this.nameErr && !this.pwdErr && !this.pwdErr2){
                      // localStorage.setItem('vue-user',JSON.stringify(this.user));
                     //alert('회원 가입 요청 중...');
                     
                         this.isProcess=true;
                     setTimeout(()=>{
                         this.requestJoin();
                         this.isProcess=false;
                     },3000)
                     
                     //this.$router.push('/login')
                }else{
                    alert('입력값에 오류가 있습니다.');
                }
                }//submit()-------
                ,requestJoin(){
                    let url="http://localhost:9090/VueBackend/join.jsp"
                    let params=new URLSearchParams();    
                    
                    params.append('name',this.user.name);
                    params.append('id',this.user.id);
                    params.append('pwd',this.user.pwd);
                    params.append('email',this.user.email);
                    var vm=this;
                    axios.post(url, params)
                        .then(function(response){
                          //  alert(response.data.result);
                           let resultData=parseInt(response.data.result);
                            if(resultData>0){
                                //vm.isProcess=false;
                                vm.isSignupFail=false;
                                alert('회원가입 처리 성공...로그인을 하세요.')
                                vm.$router.push('/')
                            }else{
                                vm.isSignupFail=true;
                            }
                        })
                        .catch(function(err){

                            alert(err.message);
                            vm.isSignupFail=true;
                        })
                }
            }//methods
    }
</script>

<style lang="scss" scoped>

</style>