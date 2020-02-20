<template>
    <div class="container">
          <link href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
            
        <board-form v-on:write-ok="getBoardData"></board-form>

        <div class="row">        
        <!-- loading 효과 주기------------- -->
        <transition name="fade">
            <div class="loading" v-show="loading">
            <span class="fa fa-spinner fa-spin"></span> Loading
            </div>
        </transition>
        <!-- ------------------------------ -->
        </div>
        <div class="row" v-show="errMsg">        
        <!-- Error메시지------------- -->
            <div class="alert alert-danger" v-show="loading">
                <h3> {{errMsg}} </h3>
            </div>
        
        <!-- ------------------------------ -->
        </div>
        <div class="row">
        <div  class="col-md-12 p-4" style="height:600px;overflow-y:auto" @scroll="onScrollEvent">
        
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
                  <span class="badge badge-success"> {{board.wdate}} </span>
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
import axios from 'axios'
    export default {
        data(){
            return{
                bno:0,
                boards:[],
                loading:false,
                errMsg:'',
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
                const url="http://localhost:9090/VueBackend/boardList.jsp";
                //const url="boardList.json";
                axios.get(url)
                    .then((res)=>{
                        alert(typeof res.data);
                        
                        
                        this.boards=res.data.boards;
                        this.loading=false;
                    })
                    .catch((err)=>{
                        this.loading=false;
                        this.errMsg=err.message;
                    })
            },
            loadMore () {
                console.log('loadMore()...')
                this.loading = true;
                setTimeout(() => {
                    for (var i = 0; i < 20; i++) {
                    this.boards.push('Item ' + this.nextItem++);
                    }
                    this.loading = false;
                }, 200);
                /**************************************/
            },
            onScrollEvent(e){
                //console.log(e.target.id)
                let list=e.target;
                if(list.scrollTop+list.clientHeight > (list.scrollHeight-100)){
                    //alert('a')
                    this.loadMore();
                }
            }
                
    },
}
</script>

<style lang="scss" scoped>
$purple: #5c4084;

body {
  background-color:  #5c4084;
  padding: 50px;
}
.container {
  padding: 40px 80px 15px 80px;
  background-color: #fff;
  border-radius: 8px;
  max-width: 800px;
}
.heading {
  text-align: center;
  h1 {
    background: -webkit-linear-gradient(#fff, #999);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    text-align: center;
    margin: 0 0 5px 0;
    font-weight: 900;
    font-size: 4rem;
    color: #fff;
  }
  h4 {
    color: lighten(#5c3d86,30%);
    text-align: center;
    margin: 0 0 35px 0;
    font-weight: 400;
    font-size: 24px;
  }
}

.list-group-wrapper {
  position: relative;
}
.list-group {
  overflow: auto;
  height: 50vh;
  border: 2px solid #dce4ec;
  border-radius: 5px;
}
.list-group-item {
  margin-top: 1px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 2px solid #dce4ec;
}
.loading {
  text-align: center;
  position: absolute;
  color: #fff;
  z-index: 9;
  background: $purple;
  padding: 8px 18px;
  border-radius: 5px;
  left: calc(50% - 45px);
  top: calc(50% - 18px);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>