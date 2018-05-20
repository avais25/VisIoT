<template>
    

<div class="app" >
  <md-card class="head_card2">
    <md-card-header>
      <md-card class="head_card">
      <div class="md-title">

        Data Visualization
      </div>
      <div class="md-subhead">
        e-yantra
      </div>
    </md-card>
    </md-card-header> 
    <md-card-content>


<div>

  <addD v-on:onSubmit="addDatasourceFn($event)"></addD>
    

<!-- triggering the event add widget -->


  <addW v-on:getname="getname($event)" v-on:gettype="gettype($event)" v-on:getkeys="getkeys($event)" v-on:geturl="geturl($event)" v-on:addit="addItem($event)"  v-bind:arr="dataSrcArr"></addW>


<!-- <ul>
      <li style="list-style: none" v-for="ds in dataSrcArr">

        <span v-if="ds.header" :class="{dataSource: ds.contacted}"> -->

<!-- Header of the column as NAME and URL -->

        <!--   <span class="datasource_name_header">NAME</span> 
          <span class="datasource_name_header">URL</span>

          <br>
        </span> -->

<!-- Dynamically fetching all the data sources have been added by user and shows in a table format NAME and URL -->

      <!--   <span v-else="ds.header" :class="{dataSource: ds.contacted}">
           <span class="datasource_name_header">{{ds.name}}</span>
           <span class="datasource_name_header">{{ds.url}}</span> 
           <span id="cross_button" v-on:click="deleteDatasource(ds)">
              <img src="./assets/delete.gif" style="width: 18px;height: 20px;">
           </span>
           <hr>
        </span>
      </li>
    </ul> -->

<md-table>
<!-- Header of the column as NAME and URL -->
  <md-table-header>
    <md-table-row>
      <md-table-head>Name</md-table-head>
      <md-table-head>URL</md-table-head>
    </md-table-row>
  </md-table-header>
<br>
<!-- Dynamically fetching all the data sources have been added by user and shows in a table format NAME and URL -->
  <md-table-body>
    <md-table-row v-for="ds in dataSrcArr">
      <span v-if="ds.header">
      </span>
      <span v-else="ds.header">
      <md-table-cell>{{ds.name}}</md-table-cell>
      <md-table-cell>{{ds.url}}</md-table-cell>
      <md-table-cell><span id="cross_button" v-on:click="deleteDatasource(ds)">
              <img src="./assets/delete.gif" style="width: 18px;height: 20px;">
           </span></md-table-cell>
      </span>
    </md-table-row>

  </md-table-body>


</md-table>


</div>





      </md-card-content>
  </md-card>

<div id="grid_box">
    <gridL v-bind:testLayout="testLayout" ></gridL>
</div>

  </div>

</template>

<script>

//importing the components

import gridL from './components/gridLayout'
import addD from './components/addDatasource'
import addW from './components/addWidget'





export default {
  name: 'App',

// Properties 

  props: {
  arr: {
    type: Array,
    default: function () { return [] }
  },

  testLayout: {
    type: Array,
    default: function () { return [
      /*{"x":0,"y":0,"w":6,"h":15,"i":"0","name":"gg"},
      {"x":6,"y":0,"w":6,"h":15,"i":"1","name":"gg"},*/] }
  },


  },

  components:  { gridL
    ,addD,addW
  },

  data() {
    return{
      newUser:{},
      //name

      nm:'',
      type:'',
      aOfKeys:[],
      url: '',

      dataSrcArr: [{
        name: 'Name',
        url: 'url',
        header: true,
        testLayout: this.testLayout,
      }]
    }
  },

   methods: {
  show:function () {
    this.$modal.show('hello-world');   // Function to show pop up dialogue box
  },
  hide:function () {
    this.$modal.hide('hello-world');  // Function to hide pop up dialogue box
  },
  beforeOpen:function (event) {
    console.log(event.params.foo);   // Function to execute before pop up dialogue box
  },


//adding the datasource 

  addDatasourceFn(arr){
    //this.title=name;
    console.log(arr);
    console.log("Name in app.vue:"+arr.name);

    this.dataSrcArr.push({
        name: arr.name,
        url: arr.url,
        header: false,
      });


  },



//deleting the datasource

  deleteDatasource: function(ds){
      this.dataSrcArr.splice(this.dataSrcArr.indexOf(ds),1);
    },

  mounted () {
  this.show();

  },

   myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
},

  created () {
  this.show();

  },

  getname(item){
    console.log("Getting name");
    this.nm=item;

    console.log("Name recieved in app.vue:"+item);
    
  },

  gettype(item){
    console.log("Getting type");
    this.type=item;

    console.log("type recieved in app.vue:"+item);
    
  },

  getkeys(item){
    console.log("Getting type");
    this.aOfKeys=item;

    console.log("Array of keys recieved in app.vue:"+item);
    console.log(item);
    
  },

  geturl(item){
    console.log("Getting type");
    this.url=item;

    console.log("Array of keys recieved in app.vue:"+item);
    console.log(item);
    
  },


  addItem(item){
    console.log("Additem called inside grid layout");
    console.log("Item to be added in GridLayout");

    var max=0;
    var maxi=0;
    for (var i = 0; i < this.testLayout.length; i++) {
      if(this.testLayout[i].y > max)
      {
        
        max= this.testLayout[i].y;
        console.log("New max:"+max);
      }

      if(this.testLayout[i].i > maxi)
      {
        
        maxi= this.testLayout[i].i;
        console.log("New maxi:"+maxi);
      }
    }

    var ak;//=this.aOfKeys
    ak= JSON.parse(JSON.stringify(this.aOfKeys));

    this.testLayout.push({"x":0,"y":max+1,"w":5,"h":10,"i": maxi+1, "name":this.nm, "type":this.type, "keys":ak, "url":this.url});
    console.log(this.testLayout);

  },

  

}

}


</script>

<!-- styles adding to the various buttons and boxes -->

<style>
#app {
  margin-top: 60px;
  margin-right: 60px;
  margin-left: 60px;
}


/*.datasource{
  width: 50%;
  float: left;
  margin-left: 50px;
  background: rgba(0,0,0,.4);
  padding: 20px;
}
.addWidget{
   
  float: left;f
  position: relative;
  padding: 20px 60px;
}
#cross_button{
  width: 5px;
  height: 5px;
  background: rgba(20,20,20,);
  color: red;
  border-radius: 2px;
  
  text-align: center;
  padding:1px 3px;
}
.datasource_name_header{

  margin: 50px;
  color: white;
  
}
#header_container{
  background: rgba(0,0,0,.2);
}*/
#grid_box{
  clear: both;
  position: relative;
  margin-top:50px; 
}
.head_card{
  background: rgba(0,0,0,.1);
}

.head_card2{
  background: rgba(0,0,0,.03);
}
</style>

