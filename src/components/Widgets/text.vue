<template>
  <div >
 
  
          <!-- <h4 class="title">Gauge ({{this.level}})</h4> -->
          <div ref="text"></div>
          <h1>{{level}}</h1>


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
    level:0,
    httpRes:{},

    extVal:' ',

}
},

  methods: {




    refreshData() {
    

    //this.level = (Math.random() * 180).toFixed(2) - 0

    console.log('inside refreshData');

    this.$http.get(this.url)
    .then(function(response){
      console.log("assigning vlaur to httpRes")
      console.log(response.data);
      //console.log(response.data.state.reported["device4.27"]);

      this.extVal=response.data

      console.log(this.extVal)
      
      //this.httpRes=response.data.state.reported["device4.27"]


       var x;
       console.log(this.keys)
    
    console.log("before for loop")
    console.log(this.extVal)


    for (var i = 0; i < this.keys.length; i++) {
      
      console.log("inside for loop")
      console.log(this.extVal)
      console.log("x:"+this.keys[i])
      this.extVal=this.extVal[this.keys[i]]
    }
    


    /*for (x in this.keys) {
      
    }*/

      console.log("after for loop")

     // console.log(this.httpRes)

      console.log("ExtVal after response")
      console.log(this.extVal)  


      })


    

      console.log("after response")

    this.level= this.extVal
    
       },
    
    
  },





  created () {
    //this.fetchData()

    this.$http.get(this.url)
    .then(function(response){
      console.log("assigning vlaur to httpRes")
      console.log(response.data);
      //console.log(response.data.state.reported["device4.27"]);

      //this.httpRes=response.data.state.reported["device4.27"]
      this.extVal=response.data
      })


      console.log("after response in created")

   
  },


  
//called while mounting
  mounted () {
 

    this.refreshData()
      setInterval(function () {
          this.refreshData();
        }.bind(this), 1000); 

      console.log("url in gauge component: "+this.url);
  

  },


}
</script>

<style scoped>
.js-plotly-plot {
  max-width: 100%;
}
</style>