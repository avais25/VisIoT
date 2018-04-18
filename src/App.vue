<template>
    

  

<div class="app" >

  <div class="datasource">

<addD v-on:onSubmit="addDatasourceFn($event)"></addD>
<ul>
      <li v-for="ds in dataSrcArr">

        <span v-if="ds.header" :class="{dataSource: ds.contacted}">
        {{ds.name}}: {{ds.url}}
          <br>
      </span>


        <span v-else="ds.header" :class="{dataSource: ds.contacted}">
        {{ds.name}}: {{ds.url}}
        <button v-on:click="deleteDatasource(ds)">x</button>
      </span>
      </li>
    </ul>
</div>

<div class="addWidget">
  <addW v-on:addit="addItem($event)" v-bind:arr="dataSrcArr"></addW>

</div>


<gridL v-bind:testLayout="testLayout"></gridL>

  </div>

</template>

<script>



import gridL from './components/gridLayout'
import addD from './components/addDatasource'
import addW from './components/addWidget'





export default {
  name: 'App',


  props: {
  arr: {
    type: Array,
    default: function () { return [] }
  },

  testLayout: {
    type: Array,
    default: function () { return [
      {"x":0,"y":0,"w":6,"h":15,"i":"0"},
      {"x":6,"y":0,"w":6,"h":15,"i":"1"},] }
  },
  },

  components:  { gridL
    ,addD,addW
  },

  data() {
    return{
      newUser:{},
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
    this.$modal.show('hello-world');
  },
  hide:function () {
    this.$modal.hide('hello-world');
  },
  beforeOpen:function (event) {
    console.log(event.params.foo);
  },


//adding the datasource
  addDatasourceFn(arr){
    //this.title=name;
    console.log(arr);
    console.log("Name in app.vue:"+arr.name);

    this.dataSrcArr.push({
        name: arr.name,
        url: arr.url,
        header: false
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


  addItem(item){
    console.log("Additem called inside grid layout");
    console.log("Item to be added in GridLayout");

    var max=0;
    for (var i = 0; i < this.testLayout.length; i++) {
      if(this.testLayout[i].y > max)
      {
        
        max= this.testLayout[i].y;
        console.log("New max:"+max);
      }
    }

    this.testLayout.push({"x":0,"y":max+1,"w":2,"h":3,"i":"4"});

  },

}

}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#box{
  background-color: #000000;
}
</style>

