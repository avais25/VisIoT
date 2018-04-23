<template>
  <div >
        <!-- ploting the previous data --> 
          <div ref="line"></div>


  </div>
</template>

<script>
//importing the components

import Plotly from 'plotly.js'
import json from './past1.json'


var xg=[];
var yg=[];



/*for (var i = 0; i < Things.length; i++) {
  Things[i]
}*/
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
    },
         url: {
      type: String,
      default: ' '
    },
    keys: {
      type: Array,
      default: function () { return [] }
    },
    nm: {
      type: String,
      default: ' '
    }
  },


 data() {
  return{

    myjson: json, 
    trace1 : {
  type: 'scatter',
  x: xg,
  y: yg,
  mode: 'lines',
  name: 'Temperature',
  line: {
    color: 'rgb(219, 64, 82)',
    width: 3
  }
},

extVal:' ',

 tempRes:{},
  humRes:{},

}
},

  methods: {


// Function to plot the line widget

    linePlot: function(){

          console.log("linePlot function called");


          var layout = {
            width: this.wt,
            height: this.ht
          }

          var data = [this.trace1];

          Plotly.newPlot(this.$refs.line, data, layout);

    
      },

// Function to plot for refreshed data

    refreshData() {



      //to match size of the grid item
    var layout = {
    width: this.wt,
    height: this.ht
    }

    console.log(this.wt);

    var data = [this.trace1];
    Plotly.update(this.$refs.line, data ,layout);



       
    }, 

    
    
  },




//called on created
  created () {
   
    
  },


  
//called on mounted
  mounted () {
      console.log("fetching jsonData");

      console.log(this.myjson);

      for (var i = 0; i < this.myjson.length; i++) {


        this.extVal=this.myjson[i];


        for (var j = 0; j < this.keys.length; j++) {
      
      console.log("inside for loop")
      console.log(this.extVal)
      console.log("x:"+this.keys[j])
      this.extVal=this.extVal[this.keys[j]]
    }
    console.log("value being pushed to y:"+this.extVal);
    xg.push(i);
    yg.push(this.extVal);
    console.log(xg);
      console.log(yg);

      }

      console.log(xg)
      console.log(yg)

    this.linePlot()

    this.refreshData()
      setInterval(function () {
          this.refreshData();
        }.bind(this), 1000); 

      console.log("value of url"+this.url)

      

  },
}
</script>

<style scoped>
.js-plotly-plot {
  max-width: 100%;
}
</style>
