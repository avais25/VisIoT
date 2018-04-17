<template>
  <div >
 
  
          <h4 class="title">Gauge ({{this.level}})</h4>
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
    level:90,
    httpRes:{},

}
},

  methods: {


    gauge: function(){

      console.log("gauge function called");

      // Enter a speed between 0 and 180
//var level = 90

// Trig to calc meter point
var degrees = 180 - this.level
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
  text: this.level,
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
       showgrid: false, range: [-1, 1]},
       //margin: { t: 5, l: 5, b: 5, r: 5 }
}

Plotly.newPlot(this.$refs.gauge, data, layout)

    },



    refreshData() {
    

    //this.level = (Math.random() * 180).toFixed(2) - 0

    console.log('inside refreshData');

    this.$http.get('http://10.129.152.123:8002/pubsub/shadow/14')
    .then(function(response){
      console.log("assigning vlaur to httpRes")
      console.log(response.data);
      console.log(response.data.state.reported["device21.55"]);
      
      this.httpRes=response.data.state.reported["device21.55"]
      })

      console.log("after response")

    this.level= this.httpRes
    /*var temp=this.$http.get('https://www.cse.iitb.ac.in/~ronit/')
    .then(function(response){
      console.log(response.data);
      });

      console.log(temp);*/

    // Trig to calc meter point
var degrees = 180 - this.level
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
  text: this.level,
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
  height: this.ht,
  width: this.wt,
  xaxis: {zeroline:false, showticklabels:false,
       showgrid: false, range: [-1, 1]},
  yaxis: {zeroline:false, showticklabels:false,
       showgrid: false, range: [-1, 1]},
       margin: { t: 80, l: 5, b: 5, r: 5 }
}


    Plotly.update(this.$refs.gauge,data ,layout)
       },
    
    
  },





  created () {
    //this.fetchData()

    this.$http.get('http://10.129.152.123:8002/pubsub/shadow/14')
    .then(function(response){
      console.log("assigning vlaur to httpRes")
      console.log(response.data);
      console.log(response.data.state.reported["device21.55"]);

      this.httpRes=response.data.state.reported["device21.55"]
      })

      console.log("after response")

      console.log(this.httpRes)

    

      //console.log(response.data);
      //this.users =response.data;
    
  },


  
//called while mounting
  mounted () {
    this.gauge()

    this.refreshData()
      setInterval(function () {
          this.refreshData();
        }.bind(this), 1000); 
  

  },


}
</script>

<style scoped>
.js-plotly-plot {
  max-width: 100%;
}
</style>