import Vue from 'vue'

import App from './App.vue'
//import Users from './Users.vue'
import VueResource from 'vue-resource';

import VModal from 'vue-js-modal'
 
Vue.use(VModal);

Vue.config.debug = true;
Vue.config.devtools = true;
Vue.use(VueResource);



new Vue({
  el: '#app', 
  components: { 
  App,
},
  template: '<App/>'
})

