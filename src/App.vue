<template>
  <div class="app">


<comp></comp>

  </div>

</template>

<script>
//import LayoutContainer from 'vue-widgets-layout';
import comp from './components/gridLayout'





export default {
  name: 'App',
  components:  { comp },

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

