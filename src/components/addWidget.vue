<template>
<div id="add_widget">

  <md-button class="md-raised md-primary" id="widgetButton" v-on:click="show" type="button">
      <span id="button_add_datasource">ADD WIDGET</span>
  </md-button>

  <!-- 
  using Vue-Modal to create a dialogue box which pop ups
  -->
<modal name="add-widget" @before-open="beforeOpen">

<div id="modal_box">
    <form id="form">
      <label> Name:</label>
        <input v-model="nm"  type="text" name="name" required>
        <br>
      <label> Type:</label>
          <select v-model="type">       <!-- List of type of widgets in dropdown menu -->
            <option >Line</option>
            <option >Gauge</option>
            <option >Map</option>
            <option >Text</option>
            <option>PastLine</option>
          </select>

      <br>

      <label>Select a Datasource:</label>             <!-- Select any data source which already created -->
      <select v-on:click="jsonParsing" v-model="url">
        <p>
          <option  v-for="ds in arr" v-bind:value="ds.url">
            <p v-if="ds.header"></p>
            <p v-else="ds.header">{{ds.name}}</p>     <!-- showing Data Sources name dynamically created by user -->
          </option>
        </p> 
      </select>

      <br>

    <label> Select Device </label>    <!-- Device from which data is coming like sensor. Example "Device61.199" -->
      <br>  
      <select   v-on:click="jsonIterator" v-model="jsonSelected">
        <option v-for="(value,key) in httpRes" v-bind:values="key">{{key}}</option>
      </select>

       <div id="record_path">
           {{jsonPath}}       <!-- Recording the path like "state -> reported -> Device61.199" -->
       </div>


      <button id="addWidget_button" v-on:click="onSub" type="button">Submit</button>
    </form>
</div>
</modal>

</div>

</template>



 
<script>
 
export default {


	name: 'addWidget',

  
  props: {

    //it will contain DataSrcArr which contain list of all datasources
  arr: {
    type: Array,
    default: function () { return [] }
  },
  

},

data() {
  return{

    type: '',
    //this url is modeled in above html
    url:'' ,
    httpRes:'',

    //json path is used to show user the selected path
    jsonPath:'',
    //contains the selected key
    jsonSelected:'',
    value:'',
    nm:'',
    //eash selection in the nested json is stored in arrayOfKeys
    arrayOfKey:[]
}
},

    components:{
  },

    methods: {

// Function to show the Modal pop up
  show () {
    this.$modal.show('add-widget');
    this.jsonPath='';
    this.httpRes='';
    this.arrayOfKey.splice(0,this.arrayOfKey.length)

    console.log("show modal function called")
  },

// Function to hide the Modal pop up
  hide () {
    this.$modal.hide('add-widget');
    this.jsonPath='';
    this.httpRes='';

    console.log("hide modal function called")
  },



// Function called before Dialogue is opened...

  beforeOpen (event) {
    this.jsonPath='';
    this.httpRes='';
    console.log("beforeOpen of addWidget called");
  },



// Function to parse the json data...

  jsonParsing() {
    console.log("Url Passed: ");
    console.log("Url Passed: "+this.url);

    this.$http.get(this.url)
    .then(function(response){
      console.log("assigning value to httpRes")
      console.log(response.data.state);
      this.httpRes=response.data
      })
  },


//this function helps in selecting sensor output from nesting of json data
  jsonIterator() {

    this.$http.get(this.url)
    .then(function(response){
      console.log("assigning value to httpRes")
      console.log(response.data.state);
      })


    //jsonSelected contains key of selected 

    if (this.httpRes.hasOwnProperty(this.jsonSelected)) {
      //json path is used to show user the selected path
    this.jsonPath=this.jsonPath+" "+this.jsonSelected;
    //getting one level inside nesting
    this.httpRes=this.httpRes[this.jsonSelected];
  }

  //eash selection in the nested json is stored in arrayOfKeys
  this.arrayOfKey.push(this.jsonSelected);
  
    console.log("jsonSelected:"+this.jsonSelected);
  console.log("res:"+this.httpRes);
  console.log(this.arrayOfKey);

  
  },


  //this function is triggered when submit button is pressed
  onSub(){
    console.log("Name inside addWidget:");

    //sending name
    this.$emit('getname',this.nm);
    this.$emit('gettype',this.type);
    var ak=this.arrayOfKey;
    this.$emit('getkeys',ak);
    this.$emit('geturl',this.url);
    this.$emit('addit','  ');
    //debugging using console.log
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


<!-- Style for ADD WIDGET button and SUMBIT button -->

<style>
#btn{
  margin-right:10px;
  float: right;
}

#widgetButton{
 width: 200px;
 background: rgba(200,0,0,.9);
 margin-left: 150px;

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