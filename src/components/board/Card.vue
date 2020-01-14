<template>
    <div>
        <h1 class="text-success">Card</h1>
        <div class="text-danger" v-if="loading">Loading Card...</div>
        <div v-else>
            <h2>CNO: {{cno}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
                cno:0,
                loading:false
            }
        },
       /*  //[1]
       watch:{ //중첩라우팅 7min
           '$route'(){
               //this.cno=this.$route.params.cno
               this.getCardData();
           } 
        },*/
        //[2] //중첩라우팅 8:30min
        watch:{
            $route:{
                handler:'getCardData',
                immediate:true
            }
        },
        created(){
           // this.cno=this.$route.params.cno;
          // this.getCardData();
          
          //Vue-router를 사용하면, $route 객체를 통해 
          //브라우저에서 현재 url에 대한 정보를 가져올 수 있다
        },
        methods:{
            getCardData(){
                this.loading=true;
                setTimeout(()=>{
                    this.cno=this.$route.params.cno;
                    this.loading=false;
                },500)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>