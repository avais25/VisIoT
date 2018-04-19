<template>
<div id="add_widget">

  <button id="widgetButton" v-on:click="show" type="button"><span id="button_add_datasource">ADD WIDGET</span></button>
  <!-- <button v-on:click="show" type="button">Add Datasource</button>
 -->
<modal name="add-widget" @before-open="beforeOpen">

<div id="modal_box">
<form id="form">
<label> Name:</label>
  <input v-model="nm"  type="text" name="name" required>
  <br>
<label> Type:</label>
  <select v-model="type">
    <option >Line</option>
    <option >Gauge</option>
    <option >Map</option>
    <option >Text</option>
    <option>PastLine</option>


  </select>
  <br>
 <label>
  Select a Datasource:
  </label>
  <select v-on:click="jsonParsing" v-model="url">
    <p >
    <option  v-for="ds in arr" v-bind:value="ds.url">
      <p v-if="ds.header"></p>
      <p v-else="ds.header">{{ds.name}}</p>
    </option>
    </p> 


  </select>
  <br>

<label> Select Device </label>

  <br>
  <select   v-on:click="jsonIterator" v-model="jsonSelected">
    <option v-for="(value,key) in httpRes" v-bind:values="key">{{key}}</option>
   
  </select>
   <div id="record_path">
  {{jsonPath}}
</div>


  <button id="addWidget_button" v-on:click="onSub" type="button">Submit</button>
</form>
</div>
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

#widgetButton{
 width: 200px;
 background: rgba(200,0,0,.9);

}

#addWidget_button{
  clear: both;
  width: 100px;
  height: auto;
  background: rgba(0,0,0,.5);
  border: 1px solid white;
  border-radius: 0px;
  margin: 10px;
  margin-left: 150px; 
  color: white;
}
#record_path{
  clear: both;
}
</style>