import Vue from 'vue'

import App from './App.vue'
//import Users from './Users.vue'
import VueResource from 'vue-resource';

import VModal from 'vue-js-modal'
 
import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.css' 


Vue.use(VueMaterial);
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

