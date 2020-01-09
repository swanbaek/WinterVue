<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-info" v-if="loading">Loading Board...</div>
            <div v-else  class="col-md-12">
                <h1 class="text-primary">Board</h1>
                <h2>bno: {{bno}} </h2>
                <router-link :to="`/board/${bno}/card/1`">Card1</router-link>
                <router-link :to="`/board/${bno}/card/2`">Card2</router-link>
                <hr>
                <router-view></router-view>
            </div>
        </div> 
    </div>
</template>

<script>
    export default {
        data(){
            return{
                bno:0,
                loading:false
            }
        },
        watch:{
            '$route'(){
                this.bno=this.$route.params.bno
               // this.getBoardData();
            }
        },
        created(){
            
            // this.bno=this.$route.params.bno;
            // if(!this.bno){
            //     this.bno=1;
            // }
            this.getBoardData();
        },
        methods:{
            getBoardData(){
                this.loading=true;
                setTimeout(()=>{
                    this.bno=this.$route.params.bno;
                    this.loading=false;
                },500)
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>