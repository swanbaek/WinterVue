import Vue from 'vue'
import App from './App.vue'
import router from './router';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //vue내부적으로 사용하는 함수
  //템플릿을 정의하면 기본적으로 render함수가 동작함
  /**
   * render:function(h){
   *  return h(App)
   * }
   * 
   */
  router
}).$mount('#app')
