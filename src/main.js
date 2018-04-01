import Vue from 'vue'

import App from './App.vue'
//import Users from './Users.vue'


Vue.config.debug = true;
Vue.config.devtools = true;




new Vue({
  el: '#app', 
  components: { 
  App,
},
  template: '<App/>'
})

