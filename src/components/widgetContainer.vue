<template>
  <div>
       <!--  
      <eGauge  v-if="msg==0"></eGauge>
      <p v-else>Widget {{msg}}</p>
-->
      <!-- <cGauge></cGauge> -->

      <p>{{ht}}  {{wt}}</p>
      <div v-if="msg==0">
        <div v-if="val==0">  
        {{val}}  
        <div id="btn"> 
         <button  v-on:click="deleteit"><img src="./del.png" width="15" height="15" />  </button>
          <button  v-on:click="settings"><img src="./set.jpeg" width="15" height="15" />  </button>
        </div>
      <pl v-bind:ht="ht" v-bind:wt="wt" ></pl> 
      </div>
      </div>



  </div>
</template>
 
<script>


import eGauge from './echart';
import pl from './Plotly'
// import cGauge from './cgauge';
 
export default {


	name: 'container',
  props:{
    ht:{
      type:String,
      default:'10'
    },
    wt:{
      type:String,
      default:'10'
    },
    val:{
      type:String,
      default:'0'
    },
    msg: {
      type: String,
      /*default:'Foobar'*/
    }
  },
    
    components:{eGauge,pl},

    methods:{
      deleteit: function(val){
        this.val='1'
      },
      Addeit: function(val){
        this.val='0'
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