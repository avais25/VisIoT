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
      <p v-else="ds.header">{{ds.name}}</p>
    </option>
    </p> 


  </select>
  <br>

Select Device:-<br>

  <br>
  <select   v-on:click="jsonIterator" v-model="jsonSelected">
    <option v-for="(value,key) in httpRes" v-bind:values="key">{{key}}</option>
    
  </select>{{jsonPath}}
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
    url:'' ,
    httpRes:'',
    jsonPath:'',
    jsonSelected:'',
    value:''

}
},

    components:{
  },

    methods: {
  show () {
    this.$modal.show('add-widget');
    this.jsonPath='';
    this.httpRes='';
  },
  hide () {
    this.$modal.hide('add-widget');
    this.jsonPath='';
    this.httpRes='';
  },


  beforeOpen (event) {
    //console.log(event.params.foo);
    console.log("beforeOpen of addWidget called");
  },

  jsonParsing() {
    console.log("Url Passed: ");
    console.log("Url Passed: "+this.url);

    this.$http.get(this.url)
    .then(function(response){
      console.log("assigning value to httpRes")
      console.log(response.data.state);
      //console.log(response.data.state.reported["device21.55"]);

      //this.httpRes=response.data.state.reported["device21.55"]
      this.httpRes=response.data
      })
  },

  jsonIterator() {

    this.$http.get(this.url)
    .then(function(response){
      console.log("assigning value to httpRes")
      console.log(response.data.state);
      })

    if (this.httpRes.hasOwnProperty(this.jsonSelected)) {
    this.jsonPath=this.jsonPath+" "+this.jsonSelected;
    this.httpRes=this.httpRes[this.jsonSelected];
  }
  else{
    console.log("else:"+this.jsonSelected);
  console.log("else:"+this.httpRes);

  }
  
    console.log("jsonSelected:"+this.jsonSelected);
  console.log("res:"+this.httpRes);

  
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