<template>
  <div >
 
  
          <h4 class="title">Gauge</h4>
          <div ref="gauge"></div>
          


  </div>
</template>

<script>
import Plotly from 'plotly.js'
export default {
 props:{
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

}
},

  methods: {


    gauge: function(){

      console.log("gauge function called");

      // Enter a speed between 0 and 180
var level = 90

// Trig to calc meter point
var degrees = 180 - level
var radius = .5
var radians = degrees * Math.PI / 180
var x = radius * Math.cos(radians)
var y = radius * Math.sin(radians)

// Path: may have to change to create a better triangle
var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
   pathX = String(x),
   space = ' ',
   pathY = String(y),
   pathEnd = ' Z'
var path = mainPath.concat(pathX,space,pathY,pathEnd)

var data = [{ type: 'scatter',
   x: [0], y:[0],
  marker: {size: 28, color:'850000'},
  showlegend: false,
  name: 'speed',
  text: level,
  hoverinfo: 'text+name'},
  { values: [50/6, 50/6, 50/6, 50/6, 50/6, 50/6, 50],
  rotation: 90,
  // text: ['TOO FAST!', 'Pretty Fast', 'Fast', 'Average',
  // 'Slow', 'Super Slow', ''],
  textinfo: 'text',
  textposition:'inside',    
  marker: {colors:['rgba(14, 127, 0, .5)', 'rgba(110, 154, 22, .5)',
             'rgba(170, 202, 42, .5)', 'rgba(202, 209, 95, .5)',
             'rgba(210, 206, 145, .5)', 'rgba(232, 226, 202, .5)',
             'rgba(245, 245, 245, 0)']},
  labels: ['151-180', '121-150', '91-120', '61-90', '31-60', '0-30', ''],
  hoverinfo: 'label',
  hole: .5,
  type: 'pie',
  showlegend: false
}]

var layout = {
  shapes:[{
      type: 'path',
      path: path,
      fillcolor: '850000',
      line: {
        color: '850000'
      }
    }],
  title: '<b>Gauge</b> <br> Temperature 0-100',
  height: 500,
  width: 500,
  xaxis: {zeroline:false, showticklabels:false,
       showgrid: false, range: [-1, 1]},
  yaxis: {zeroline:false, showticklabels:false,
       showgrid: false, range: [-1, 1]}
}

Plotly.newPlot(this.$refs.gauge, data, layout)


    }

    
    
  },





  created () {
    //this.fetchData()
  },


  
//called while mounting
  mounted () {
    this.gauge()
  

  },


}
</script>

<style scoped>
.js-plotly-plot {
  max-width: 100%;
}
</style>