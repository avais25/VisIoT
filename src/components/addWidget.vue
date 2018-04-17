<template>
<div>
  <button v-on:click="show" type="button">Add Widget</button>
  <!-- <button v-on:click="show" type="button">Add Datasource</button>
 -->
<modal name="add-widget" @before-open="beforeOpen">

<form>
  Name:<br>
  <input v-model="name"  type="text" name="name" required>
  <br>
  Type:<br>
  <input v-model="type"type="text" name="type" required>
  <br>
  <!-- <input v-model="url"  v-on:click="onSubmit" type="submit" name="submit" > -->
  <button v-on:click="onSubmit" type="button">Submit</button>
</form>

</modal>

</div>

</template>



 
<script>


//import vmodal from 'vue-js-modal'

 
export default {


	name: 'addWidget',


  props: {
  arr: {
    type: Array,
    default: function () { return [] }
  }
},

data() {
  return{
    
    name: '',
    type: ''

}
},

    components:{
  },

    methods: {
  show () {
    this.$modal.show('add-widget');
  },
  hide () {
    this.$modal.hide('add-widget');
  },


  beforeOpen (event) {
    //console.log(event.params.foo);
    console.log("beforeOpen of addWidget called");
  },

  onSubmit(){
    this.hide();
   /* //assign name and url to the array
    this.arr.name=this.name;
    this.arr.url=this.url;
    this.$emit('onSubmit',this.arr);*/

    console.log("Name inside addWidget:");
    console.log(this.arr);

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