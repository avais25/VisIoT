<template>
<div>
  <button v-on:click="show" type="button">Add Widget</button>
  <!-- <button v-on:click="show" type="button">Add Datasource</button>
 -->
<modal name="add-widget" @before-open="beforeOpen">

<form>
  Name:<br>
  <input v-model="nm"  type="text" name="name" required>
  <br>
  Type:<br>
  <select v-model="type">
    <option >Line</option>
    <option >Gauge</option>
    <option >Battery</option>
    <option >Map</option>
    <option >Text</option>


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


  <button v-on:click="onSub" type="button">Submit</button>
</form>

</modal>

</div>

</template>



 
<script>


//import vmodal from 'vue-js-modal'
//var arrayOfKey=[];
 
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
    
    //name: '',
    type: '',
    url:'' ,
    httpRes:'',
    jsonPath:'',
    jsonSelected:'',
    value:'',
    nm:'',
    arrayOfKey:[]
}
},

    components:{
  },

    methods: {
  show () {
    this.$modal.show('add-widget');
    this.jsonPath='';
    this.httpRes='';
    this.arrayOfKey.splice(0,this.arrayOfKey.length)
    //this.arrayOfKey=[];

    console.log("show modal function called")
  },
  hide () {
    this.$modal.hide('add-widget');
    this.jsonPath='';
    this.httpRes='';
    //this.arrayOfKey.splice(0,this.arrayOfKey.length)

    console.log("hide modal function called")
  },


  beforeOpen (event) {
    //console.log(event.params.foo);
    this.jsonPath='';
    this.httpRes='';
    //this.arrayOfKey.splice(0,this.arrayOfKey.length)
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


    //jsonSelected contains key of selected 

    if (this.httpRes.hasOwnProperty(this.jsonSelected)) {
    this.jsonPath=this.jsonPath+" "+this.jsonSelected;
    this.httpRes=this.httpRes[this.jsonSelected];
  }
  this.arrayOfKey.push(this.jsonSelected);
  //httpRes should contain final value
  // jsonSelected should coontain final key
  /*else{
    console.log("else:"+this.jsonSelected);
    console.log("else:"+this.httpRes);

  }*/
  
    console.log("jsonSelected:"+this.jsonSelected);
  console.log("res:"+this.httpRes);
  console.log(this.arrayOfKey);

  
  },

  onSub(){
    //this.hide();
   
   
    console.log("Name inside addWidget:");
    //console.log(this.arr);

    //sending name
    this.$emit('getname',this.nm);

    this.$emit('gettype',this.type);

    var ak=this.arrayOfKey;

    this.$emit('getkeys',ak);

    this.$emit('geturl',this.url);

    this.$emit('addit','  ');

    
    console.log("addit event emited");

    console.log("Name passed from addWidget:"+this.nm);
    console.log("Type passed from addWidget:"+this.type);
    console.log("Array of keys passed from addWidget:");
    console.log(this.arrayOfKey);

    this.hide();

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