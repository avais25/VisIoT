<template>
  <div >
 
  
          <h4 class="title">Line Plot(temp:{{this.tempRes}})(Humid:{{this.humRes}})</h4>
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
  y: [0, 0, 0, 0],
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
  y: [0, 0, 0, 0],
  mode: 'lines',
  name: 'Humidity',
  line: {
    color: 'rgb(55, 128, 191)',
    width: 3
  }
},

 tempRes:{},
  humRes:{},

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


    rePlot: function(){
      //this function helps in replotng traces

      console.log("inside rePlot function");



      //reploting trace of temperature
      this.trace1.y[3]=this.trace1.y[2]

      this.trace1.y[2]=this.trace1.y[1]

      this.trace1.y[1]=this.trace1.y[0]

      this.trace1.y[0]=this.tempRes



      //reploting trace of humidity
      this.trace2.y[3]=this.trace2.y[2]

      this.trace2.y[2]=this.trace2.y[1]

      this.trace2.y[1]=this.trace2.y[0]

      this.trace2.y[0]=this.humRes




    },


    refreshData() {



      //getting temperature response from http
       this.$http.get('http://10.129.152.123:8002/pubsub/shadow/14')
    .then(function(response){
      console.log("assigning vlaur to tempRes")
      console.log(response.data);
      console.log(response.data.state.reported["device21.55"]);

      this.tempRes=response.data.state.reported["device21.55"];

      console.log(response.data.state.reported["device21.56"]);

      this.humRes=response.data.state.reported["device21.56"]
      })

      console.log("after response")

      console.log(this.tempRes)
      console.log(this.humRes)

      

      //to match size of the grid item
    var layout = {
    width: this.wt,
    height: this.ht
    }



    //this.trace1.x.unshift((Math.random() * 17).toFixed(2) - 0);
    

    //this.trace1.line.width=(Math.random() * 8).toFixed(2) - 0;
    //this.trace1.y=[5,4,2,6];
    //this.trace1.y[0]=(Math.random() * 17).toFixed(2) - 0
    console.log(this.trace1)
    console.log(this.trace1.y)

    //this.trace1.y.unshift((Math.random() * 17).toFixed(2) - 0);
    //this.trace1.y.splice(3,1);


 
    var data = [this.trace1, this.trace2]

   // this.level = (Math.random() * 180).toFixed(2) - 0



    Plotly.redraw(this.$refs.line, data ,layout)

    this.rePlot()
       }, 

    
    
  },




//called on created
  created () {
    //this.fetchData()
     this.$http.get('http://10.129.152.123:8002/pubsub/shadow/14')
    .then(function(response){
      console.log("assigning vlaur to tempRes")
      console.log(response.data);

      console.log(response.data.state.reported["device21.55"]);

      this.tempRes=response.data.state.reported["device21.55"];

      console.log(response.data.state.reported["device21.56"]);

      this.humRes=response.data.state.reported["device21.56"]
      })

      console.log("after response")

      console.log(this.tempRes)
      console.log(this.humRes)


      

    
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
