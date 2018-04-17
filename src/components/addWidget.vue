<template>
<div>
  <button v-on:click="show" type="button">Add Widget</button>
  <!-- <button v-on:click="show" type="button">Add Datasource</button>
 -->
<modal name="hello-world" @before-open="beforeOpen">
  hello, world!
</modal>

</div>

</template>



 
<script>


//import vmodal from 'vue-js-modal'

 
export default {


	name: 'addWidget',

    components:{
  },

    methods: {
  show () {
    this.$modal.show('hello-world');
  },
  hide () {
    this.$modal.hide('hello-world');
  },
  beforeOpen (event) {
    console.log(event.params.foo);
  }
}


   }


</script>



<style>
#btn{
  margin-right:10px;
  float: right;
}
</style>