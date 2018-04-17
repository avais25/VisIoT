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
  <addW v-bind:arr="dataSrcArr"></addW>

</div>


<gridL></gridL>

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
  }
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
        header: true
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

