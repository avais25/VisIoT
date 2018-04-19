<template>
  <div>

      
        <div v-if="val==0" style="color:white">  
         <h1> {{nm}}</h1>
        
        <div id="btn" style="color:black"> 
          
        <span v-on:click="deleteit"><img src="~@/assets/delete.gif" style="width: 22px;height: 25px;position: relative;left: -50px;top: -50px"></span>

        
        </div>

        
      <div v-if="type == 'Gauge'">
      <plotlyGauge v-bind:ht="ht" v-bind:wt="wt" v-bind:url="url" v-bind:keys="keys" v-bind:nm="nm"></plotlyGauge>
      </div>

      <div v-if="type == 'Line'">
      <plotlyLine v-bind:ht="ht" v-bind:wt="wt" v-bind:url="url" v-bind:keys="keys" v-bind:nm="nm"></plotlyLine>
      </div>

      <div v-if="type == 'Text'">
      <textv v-bind:ht="ht" v-bind:wt="wt" v-bind:url="url" v-bind:keys="keys" v-bind:nm="nm"></textv>
      </div>

      <div v-if="type == 'PastLine'">
      <textp v-bind:ht="ht" v-bind:wt="wt" v-bind:url="url" v-bind:keys="keys" v-bind:nm="nm"></textp>
      </div>
      <div v-if="type == 'Map'">
      <gmap name="Example" v-bind:ht="ht" v-bind:wt="wt" v-bind:url="url" v-bind:keys="keys" v-bind:nm="nm"></gmap>
      </div>

      </div>



  </div>
</template>
 
<script>


//import eGauge from './echart';
import plotlyGauge from './Widgets/Gauge'
import plotlyLine from './Widgets/Line'
import textv from './Widgets/text'
import textp from './Widgets/pastLine'
import gmap from './Widgets/Gmap'
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
      type: Number,
      default: '10'
      /*default:'Foobar'*/
    },
    nm: {
      type: String,
      default: ' '
    },
    type: {
      type: String,
      default: ' '
    },
    url: {
      type: String,
      default: ' '
    },
    keys: {
      type: Array,
      default: function () { return [] }
    }
  },
    
    components:{plotlyGauge,
    plotlyLine,textv,textp,gmap
  },

    methods:{
      deleteit: function(val){
        //this.val='1'

        this.$emit('deleteit',this.index)
      },
      Addeit: function(val){
        //this.val='0'
      },

      settings: function(val){
        //this.val='0'
      }
    }

};
</script>
<style>
#btn{
  
  float: right;
}
</style>