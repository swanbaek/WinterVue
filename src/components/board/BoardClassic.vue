<template>
    <div class="container">
          <link href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
            
        <board-form v-on:write-ok="getBoardData" v-bind:member="member"></board-form>

        <div class="row">        
        <div class="col-md-12 p-4 text-info" v-if="loading">Loading Board...</div>        
        <div v-else  class="col-md-12 p-4" style="height:600px;overflow-y:auto">
        
            <ul class="media-list p-3" style="border:1px solid silver">
              <li class="media m-2 p-2" :key="board.idx" v-for="(board) in boards" style="border-bottom:1px solid silver;background:#e9ecef">
                <a class="pull-left mr-5" href="#"> {{board.filename}}
                    <img v-if="board.filename=='noimage.png'"  src="http://pingendo.github.io/pingendo-bootstrap/assets/user_placeholder.png" 
                     height="64" width="64" class="media-object center-block img-circle img-responsive">
                    
                    <img v-else :src="board.imagePath" height="64" width="64" class="media-object center-block img-circle img-responsive">
                     <br>
                  <span>{{board.name}}</span>
                </a>  
                    
                <div class="media-body text-left">
                  <h4 class="media-heading">{{board.subject}}</h4>
                  <p>{{board.content}}
                  </p>
                  <span class="badge badge-success">{{(board.wdate.year+1900)+"-"+(board.wdate.month+1)+"-"+board.wdate.date}}</span>
                  <span><a><i class="fa fa-1x fa-fw fa-heart"></i></a></span>
                  <span><a><i class="fa fa-1x fa-fw fa-hand-o-down"></i></a></span>
                  <span><a><i class="fa fa-1x fa-fw fa-edit"></i></a></span>
                  <span><a><i class="fa fa-1x fa-fw fa-trash-o"></i></a></span>
                </div>
              </li>              
            </ul>
        </div> 
        </div> <!-- row-->
    </div>
</template>

<script>
import BoardWrite from './BoardWrite.vue'
    export default {
        data(){
            return{
                bno:0,
                boards:[],
                loading:false,
                isOne:true,
                isTwo:true
                
            }
        },
         props:['member'],       
        components:{
            'board-form':BoardWrite
        },
        watch:{
            '$route'(){
                this.bno=this.$route.params.bno
               // this.getBoardData();
            }
        },
        created(){
            //alert(this.member.nick);
            
            // this.bno=this.$route.params.bno;
            // if(!this.bno){
            //     this.bno=1;
            // }
            this.getBoardData();
        },
        methods:{
            getBoardData(){
                this.loading=true;
                var req=new XMLHttpRequest();
                const url="http://localhost:9090/VueBackend/board.do";
                //req.open("GET","board.json");
                req.open("GET", url);
                req.onload=()=>{
                    var res=req.responseText;
                    this.boards=JSON.parse(res);
                    
                }
                req.send(null);
                this.loading=false;
                
            },

        }
    }
</script>

<style lang="scss" scoped>

</style>