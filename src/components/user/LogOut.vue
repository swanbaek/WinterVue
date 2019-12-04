<template>
    <div>
    </div>
</template>

<script>
    export default {
        created(){
            sessionStorage.removeItem('vue-user');
            sessionStorage.setItem("isLogin",false);
            this.$emit('login-result', null);
            this.$router.push('/');
        }
    } 
</script>

<style lang="scss" scoped>

</style> 