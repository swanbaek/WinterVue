<template>
  <div class="container" id="app">
  
  <div class="list-group-wrapper">
    <transition name="fade">
      <div class="loading" v-show="loading">
        <span class="fa fa-spinner fa-spin"></span> Loading
      </div>
    </transition>
    <!-- <transition name="fade">
      <button class="btn btn-primary" disabled>
        <span class="spinner-grow spinner-grow-sm"></span>
          Loading..
      </button>
    </transition>   -->
    <ul class="list-group" id="infinite-list" @scroll="onScrollEvent">
      <li class="list-group-item" v-for="(item,index) in items" v-text="item" :key="index"></li>
    </ul>
  </div>
  
</div>

</template>

<script>
  export default {
     data:function() {
       return{
    loading: false,
    nextItem: 1,
    items: ['Item1']
       }
  },
   mounted () {

    // Detect when scrolled to bottom.
    // const listElm = document.querySelector('#infinite-list');
    // listElm.addEventListener('scroll',( ) => {
    //   console.log(listElm.scrollTop +','+ listElm.clientHeight+', '+listElm.scrollHeight)
    //   console.log(listElm.scrollTop + listElm.clientHeight+', '+listElm.scrollHeight)
    //   if(listElm.scrollTop + listElm.clientHeight >= (listElm.scrollHeight-100)) {
    //     //this.loadMore();
    //   }
    // });

    // Initially load some items.
    this.loadMore();

  },
  methods: {
    loadMore () {
      console.log('loadMore()...')
      
      /** This is only for this demo, you could 
        * replace the following with code to hit 
        * an endpoint to pull in more data. **/
      this.loading = true;
      setTimeout(() => {
        for (var i = 0; i < 20; i++) {
          this.items.push('Item ' + this.nextItem++);
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
  }
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