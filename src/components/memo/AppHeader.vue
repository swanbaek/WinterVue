<template>
    <div class="jumbotron text-center">
        <h1>MyVue App </h1>
        <h2 class="text-primary text-center">{{title}}</h2>
        <button class="btn btn-outline-danger mt-3" v-on:click="go">Message</button>
    </div>
</template>

<script>
    export default {
        props:{
            title: String
        },
        methods:{
            go:function(){
                this.$emit('renew')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>