<template>
          <div class="col-md-3 col-sm-12 col-xs-12 p-3">

                <div class="card">
                    <img src="images/img02.png" class="card-img-top img img-thumbnail"/>
                    <div class="card-body text-center">
                        <h3 class="card-title">한줄 메모장 </h3>
                        <p class="card-text">Have a Happy Day~</p>                    
                        <a href="#" class="btn btn-outline-primary" v-on:click="goAdd">+</a>
                    </div>
                </div>                
            </div>

</template>

<script>
    export default {
        methods:{
            goAdd:function(){
                this.$emit('changeMode','write')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>