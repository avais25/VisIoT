<template>
  <div >
 
  
          <h4 class="title">Line Plot</h4>
          <div ref="line"></div>


  </div>
</template>

<script>
import Plotly from 'plotly.js'
export default {
 props:{
  //getting height and width of the grid item
    ht:{
      type:Number,
      default:'10'
    },
    wt:{
      type:Number,
      default:'10'
    }
  },


 data() {
  return{
//contains the data
}
},

  methods: {


    linePlot: function(){

      console.log("linePlot function called");

var trace1 = {
  type: 'scatter',
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: 'lines',
  name: 'Red',
  line: {
    color: 'rgb(219, 64, 82)',
    width: 3
  }
}

var trace2 = {
  type: 'scatter',
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: 'lines',
  name: 'Blue',
  line: {
    color: 'rgb(55, 128, 191)',
    width: 1
  }
}

var layout = {
  width: 500,
  height: 500
}

var data = [trace1, trace2];

Plotly.newPlot(this.$refs.line, data, layout);

    

    }

    
    
  },




//called on created
  created () {
    //this.fetchData()
    
  },


  
//called on mounted
  mounted () {
    this.linePlot()

  },


}
</script>

<style scoped>
.js-plotly-plot {
  max-width: 100%;
}
</style>
