<template>
    

  

<div class="app" >

  <div>
<!-- <button v-on:click="show"  type="button" href=""><i>Add Widget</i></button>
<button v-on:click="show" type="button">Add Datasource</button> -->
<addD></addD>
</div>



<!-- <modal name="hello-world" @before-open="beforeOpen">
<form>
  First name:<br>
  <input type="text" name="firstname"><br>
  Last name:<br>
  <input type="text" name="lastname">
</form>
</modal>
 -->

<gridL></gridL>

  </div>

</template>

<script>



import gridL from './components/gridLayout'
import addD from './components/addDatasource'




export default {
  name: 'App',
  components:  { gridL
    ,addD
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

