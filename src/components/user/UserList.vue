<template>
  <div class="table-responsive-sm mt-5">
    <table class="table table-striped mt-2">
        <tr  style="background:#efefef">
            <th colspan="4">::회원 목록::</th>
        </tr>
        <tr>
            <th>번호</th>
            <th>이름</th>
            <th>Email</th>
            <th>가입일</th>
        </tr>

        <tr v-for="(user) in userList" :key="user.idx">
            <td> {{user.idx}} </td>
            <td> {{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.indate}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
    export default {
        created(){
            let url="http://localhost:9090/VueBackend/userAll.jsp";            
            axios.get(url)
                .then(function(res){
                    this.userList=res.data.users;
                }.bind(this))
                .catch(function(err){
                    alert('error: '+err.message)
                })
        },
        data(){
            return{
                userList:[]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>