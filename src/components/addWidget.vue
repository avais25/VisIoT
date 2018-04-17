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
  <select >
    <option >Line</option>
    <option >Gauge</option>
    <option >Battery</option>
    <option >Map</option>


  </select>
  
  <br>
  Select a Datasource:-
  <br>
  <select >
    <option v-for="ds in arr">
      <p v-if="ds.header"></p>
      <p v-else="ds.header">{{ds.name}}</p>
    </option>


  </select>
  <br>
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