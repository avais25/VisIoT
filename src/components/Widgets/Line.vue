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

/*   a:[1, 2, 3, 4],
 b: [10, 15, 13, 17],
*/
 
    trace1 : {
  type: 'scatter',
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: 'lines',
  name: 'Temperature',
  line: {
    color: 'rgb(219, 64, 82)',
    width: 3
  }
},

trace2 : {
  type: 'scatter',
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: 'lines',
  name: 'Humidity',
  line: {
    color: 'rgb(55, 128, 191)',
    width: 2
  }
}

}
},

  methods: {


    linePlot: function(){

      console.log("linePlot function called");



    var layout = {
      width: this.wt,
      height: this.ht
    }

    var data = [this.trace1, this.trace2];

    Plotly.newPlot(this.$refs.line, data, layout);

  
    },


    refreshData() {

    var layout = {
    width: this.wt,
    height: this.ht
    }

    //this.trace1.x.unshift((Math.random() * 17).toFixed(2) - 0);
    

    this.trace1.line.width=(Math.random() * 8).toFixed(2) - 0;
    //this.trace1.y=[5,4,2,6];
    this.trace1.y[0]=(Math.random() * 17).toFixed(2) - 0
    console.log(this.trace1)
    console.log(this.trace1.y)

    //this.trace1.y.unshift((Math.random() * 17).toFixed(2) - 0);
    //this.trace1.y.splice(3,1);


 
    var data = [this.trace1, this.trace2]

   // this.level = (Math.random() * 180).toFixed(2) - 0



    Plotly.redraw(this.$refs.line, data ,layout)
       }, 

    
    
  },




//called on created
  created () {
    //this.fetchData()
    
  },


  
//called on mounted
  mounted () {
    this.linePlot()

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
