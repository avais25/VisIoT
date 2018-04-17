<template>
<div>
  <button v-on:click="show" type="button">Add Datasource</button>
  <!-- <button v-on:click="show" type="button">Add Datasource</button>
 -->


<modal name="add-datasource" @before-open="beforeOpen">
<form>
  Name:<br>
  <input v-model="name"  type="text" name="name" required><br>
  URL:<br>
  <input v-model="url"type="text" name="url" required>
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


	name: 'addDatasource',

  props:{
   
    index: {
      type: String,
      default: '10'
      /*default:'Foobar'*/
    }
  },

  data() {
  return{
    
    url: '',
    name: '',
    arr:
    {
      "name":this.name,
      "url":this.url
    },

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
    //console.log(event.params.foo);
    console.log("beforeOpen function executed");
  },


  onSubmit(){
    this.hide();
    //assign name and url to the array
    this.arr.name=this.name;
    this.arr.url=this.url;
    this.$emit('onSubmit',this.arr);

    console.log("Name inside addDatasource:"+this.name);

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