<template>
       <div class="col-md-3 col-sm-12 col-xs-12 p-3">
            <div class="card" style="height: 350px">
                <div class="card-header text-center">
                <h3 class="text-center text-success">Add Memo</h3>
                </div>
                <div class="card-body text-center">
                <form action="memoAdd.jsp" method="post" v-on:submit="create">
                    <input type="text"
                     name="title" placeholder="제  목" class="form-control" v-model="memo.title">
                     <p>
                    <textarea name="msg" placeholder="메모 내용" class="form-control" v-model="memo.msg"></textarea>
                    </p>
                    <button class="btn btn-outline-success">글쓰기</button>
                    <!-- <button type="button" class="btn btn-outline-primary" v-on:click="go('intro')">HOME</button>
                    <button type="button" class="btn btn-outline-warning" v-on:click="go('list')">LIST</button> -->
                </form> 
                </div>
                
            </div> 
        </div>

</template>

<script>
    export default {
        data:function(){
            return {
                memo:{
                    title:'',
                    msg:'',
                    wdate:''
                }
            }
        },
        methods:{
            go:function(mode){
                this.$emit('changeMode',mode);
            },
            create:function(e){
                e.preventDefault();
                let d=new Date();
                this.memo.wdate=d.getFullYear()+"-"+(d.getMonth()+1)+'-'+d.getDate();
                this.$emit('addMemo',this.memo);
                this.memo={title:'',msg:'',wdate:''};
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>