<template>
  <div >
 
  
          <h4 class="title">Gauge</h4>
          <div ref="pie"></div>


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

    }

    
    
  },





  created () {
    //this.fetchData()
    //this.gauge()
  },


  

  mounted () {
    

    Plotly.plot(
      this.$refs.pie,
      [{
        values: [10, 35, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie',
       
      }],
      [{
        margin: { t: 0, l: 0, b: 0, r: 0 },

        height: this.ht,
         width: this.wt,
      }]
    )
    


  },

  data () {
    return {
      rows: [],
    }
  },

}
</script>

<style scoped>
.js-plotly-plot {
  max-width: 100%;
}
</style>