<template>
  <div>

      
        <div v-if="val==0" style="color:white">  
          {{nm}}
        
        <div id="btn" style="color:black"> 
          
        <button v-on:click="deleteit" class="collection-item mdl-navigation__link" ><i class="mdl-color-text--blue-grey-100 material-icons" role="presentation">delete</i></button>

        <button v-on:click="deleteit" class="collection-item mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-100 material-icons" role="presentation">settings</i></button>


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

      </div>



  </div>
</template>
 
<script>


//import eGauge from './echart';
import plotlyGauge from './Widgets/Gauge'
import plotlyLine from './Widgets/Line'
import textv from './Widgets/text'
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
    plotlyLine,textv
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
  margin-right:10px;
  float: right;
}
</style>