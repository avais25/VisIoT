<template>
  <div>
       <!--  
      <eGauge  v-if="msg==0"></eGauge>
      <p v-else>Widget {{msg}}</p>
-->
      <!-- <cGauge></cGauge> -->

      <!-- <p>{{ht}}  {{wt}}</p> -->
      
        <div v-if="val==0">  
        
        <div id="btn"> 
         <button  v-on:click="deleteit"><img src="./Icons/del.png" width="15" height="15" />  </button>
          <button  v-on:click="settings"><img src="./Icons/set.jpeg" width="15" height="15" />  </button>
        </div>

        <div v-if="index==0">
      <plotlyGauge v-bind:ht="ht" v-bind:wt="wt" ></plotlyGauge>
      </div>

      <div v-if="index==1">
      <plotlyLine v-bind:ht="ht" v-bind:wt="wt" ></plotlyLine>
      </div>

      </div>



  </div>
</template>
 
<script>


//import eGauge from './echart';
import plotlyGauge from './Widgets/Gauge'
import plotlyLine from './Widgets/Line'
// import cGauge from './cgauge';
 
export default {


	name: 'container',
  props:{
    //height of the ccontainer
    ht:{
      type:Number,
      default:'10'
    },
    //width of the container
    wt:{
      type:Number,
      default:'10'
    },
    //val contains the flag for delete button
    val:{
      type:String,
      default:'0'
    },
    //index of the container
    index: {
      type: String,
      default: '10'
      /*default:'Foobar'*/
    }
  },
    
    components:{plotlyGauge,
    plotlyLine
  },

    methods:{
      deleteit: function(val){
        this.val='1'
      },
      Addeit: function(val){
        this.val='0'
      },

      settings: function(val){
        //this.val='0'
      }
    }

};
</script>
<style>
#btn{
  margin-right:10px;
  float: right;
}
</style>