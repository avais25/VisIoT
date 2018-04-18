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
  <select v-on:click="jsonParsing" v-model="url">
    <p >
    <option  v-for="ds in arr" v-bind:value="ds.url">
      <p v-if="ds.header"></p>
      <p v-else="ds.header" v-on:click="jsonParsing">{{ds.name}}</p>
    </option>
    </p> 

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
  },

},

data() {
  return{
    
    name: '',
    type: '',
    url:'' 

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

  jsonParsing() {
    console.log("Url Passed: ");
    console.log("Url Passed: "+this.url);
  },

  onSubmit(){
    this.hide();
   

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