<template>
          <div class="col-md-3 col-sm-12 col-xs-12 p-3">

            <div class="card">
            <ul class="list-group">
            <li class="list-group-item active d-flex justify-content-between align-items-center">
            Memo List
                <span class="badge badge-danger badge-pill">2019-06-01</span>
            </li>
                
            <li  v-for="(memo,i) in memoList" v-bind:key="i"  class="list-group-item d-flex justify-content-between align-items-center">                   
                <a href="#"  v-on:click.prevent="goEdit(memo)" >{{memo.no}} {{memo.title}}</a>
                <span class="badge badge-danger badge-pill">{{memo.wdate}}</span>
            </li> 
            
            
            </ul>
                    <!-- <button type="button" class="btn btn-outline-primary mt-3" v-on:click="go('intro')">HOME</button>
                    <button type="button" class="btn btn-outline-warning" v-on:click="go('write')">WRITE</button> -->
            </div>                
        </div>
</template> 

<script>
    export default {
        props:['memoList'],
        methods:{
            go:function(val){
                this.$emit('changeMode',val);
            },
             goEdit:function(memo){
                //alert(memo.no+"/"+memo.title+"/"+memo.wdate);
                this.$emit('showEdit',memo);
            }
        },
       
    }
</script>

<style lang="scss" scoped>

</style>