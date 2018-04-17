<template>
<div>
  <button v-on:click="show" type="button">Add Datasource</button>
  <!-- <button v-on:click="show" type="button">Add Datasource</button>
 -->


<modal name="add-datasource" @before-open="beforeOpen">
<form>
  Name:<br>
  <input type="text" name="name"><br>
  URL:<br>
  <input type="text" name="url">
  <br>
  <input type="submit" name="submit" >
</form>
</modal>
</div>


</template>



 
<script>


//import vmodal from 'vue-js-modal'

 
export default {


	name: 'addDatasource',

  props:{
   
    index: {
      type: String,
      default: '10'
      /*default:'Foobar'*/
    }
  },

    components:{
  },

    methods: {
  show () {
    this.$modal.show('add-datasource');
  },
  hide () {
    this.$modal.hide('add-datasource');
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