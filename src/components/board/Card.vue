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