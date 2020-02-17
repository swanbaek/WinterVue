<template>
    <div class="container mt-5 mb-3">
        <div class="row">
            <div class="col-md-12 p-4" style="border:1px solid seagreen">    
                <h1>POST</h1>            
                <form id="bf" class="form" method="post" enctype="multipart/form-data" v-on:submit="handleSubmit">                    
                    <input type="text" name="subject" id="subject" v-model="board.subject"
                     class="form-control m-1" placeholder="Subject">
                    <textarea name="content" placeholder="Content"
                    v-model="board.content"  class="form-control m-1"></textarea>
                    <input type="file" ref="file" name="filename" id="filename"
                    v-on:change="handleFileup()"
                     class="form-control m-1">
                    
                    <div class="col-md-6 offset-md-3 text-center" v-if="preview">
                        <img v-bind:src="preview" class="img img-thumbnail"></div>

                    <button v-if="!loading" class="btn btn-outline-danger m-1">글쓰기</button>
                    <button v-else class="btn btn-danger m-1">Loading...</button>
                </form>    
                
            </div> 
        </div>
        

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                board:{
                    idx:1,
                    name:'',
                    subject:'',
                    content:'',
                    filename:'',                    
                },
                preview:'a', //업로드 이미지 미리보기시 사용
                loading:false,
                result:false,
                boards:[]               
            }
        },
        props:['member'],
        methods:{
            handleFileup(){
                this.board.filename=this.$refs.file.files[0];
               // alert(JSON.stringify(this.board.filename))
               //이미지 미리보기-----------------
                var file =this.board.filename; //e.target.files[0];
               // alert(file)
                if (file && file.type.match(/^image\/(png|jpeg)$/)) {
                    this.preview = window.URL.createObjectURL(file)
                    alert(this.preview)
                }
            },
            handleSubmit(e){
                e.preventDefault();
                // if(!this.member.nick){
                //     alert('로그인을 해야 이용 가능합니다.');
                //     return;
                // }
                
                //--------------------------

                this.board.name=this.member.nick;
                let fd = new FormData();
                fd.append("name",this.board.name);
                fd.append("subject", this.board.subject);
                fd.append("content", this.board.content);
                fd.append("filename", this.board.filename);
                const vobj=this;
                axios.post( 'http://localhost:9090/VueBackend/boardEnd.do',
                fd,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                ).then(function(){
                    alert('success'+this);
                    vobj.result=true;
                    vobj.board.subject='';
                    vobj.board.content='';
                    vobj.board.filename='';
                })
                .catch(function(e){
                    alert('fail'+e);
                    vobj.result=false;
                });

            }
        },          
        watch:{
            result:function(val){ //result값이 변할 때 호출된다.
                //alert('val='+val);
                if(val){
                    this.$emit('write-ok');//부모 컴포넌트에 write-ok란 이벤트를 발생시킨다.
                    //그러면 부모 컴포넌트는 write-ok를 v-on으로 수신하여 
                    //그에 따라 처리할 함수(getBoardData())를 호출한다.

                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>