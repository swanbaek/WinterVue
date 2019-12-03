<template>
  <div class="container">
    <!-- root element 는 하나여야 함 이곳에 html이 들어감 -->
    <!-- <app-header v-bind:title="msg" v-on:renew="renewTitle"></app-header> -->
    <!-- <intro-content v-if="mode==='intro'" v-on:changeMode="setMode"/>
    <create-content v-if="mode==='write'" v-on:changeMode="setMode" v-on:addMemo="save"/>
    <list-content v-if="mode==='list'" v-bind:memoList="memoArr" v-on:changeMode="setMode"/> -->
  <div class="row m-5">
    <intro-content  v-on:changeMode="setMode"/>
    <create-content  v-on:changeMode="setMode" v-on:addMemo="save"/>
    <list-content  v-bind:memoList="memoArr" v-on:changeMode="setMode"/>
  </div>
  </div>
</template>


<script>
// import AppHeader from './memo/AppHeader.vue';
import IntroContent from './memo/IntroContent.vue';
import CreateContent from './memo/CreateContent.vue';
import ListContent from './memo/ListContent.vue';
  export default {
    // 이곳에는 Vue의 속성이나 메소드들이 들어감
    data:function(){
      return{
        msg:'Hello Vue~',
        flag:false,
        mode:'intro',
        memo:{
          title:'',
          msg:'',
          wdate:''
        },
        memoArr:[]
      }
    },
    components:{
      // 'app-header':AppHeader,
      'intro-content':IntroContent,
      'create-content':CreateContent,
      'list-content':ListContent
    },
    methods:{
      renewTitle:function(){
        this.msg=(this.flag)?"Good Luck~~!":"Bye Bye~~";
        this.flag=!this.flag;
      },
      setMode:function(val){
        this.mode=val;
      },
      save:function(val){
        const mymemo={...val};
        //alert(JSON.stringify(mymemo));
        this.memoArr.push(mymemo);
        localStorage.setItem('memos', JSON.stringify(this.memoArr));
      }      
    },
    created(){
      this.memoArr=JSON.parse(localStorage.getItem('memos'));
    }
  }
</script>

<style lang="scss" scoped>

</style>