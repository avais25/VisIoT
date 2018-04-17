<template>

  <button></button>


</template>
 
<script>



import plotlyGauge from './Widgets/Gauge'
import plotlyLine from './Widgets/Line'

 
export default {


	name: 'addPane',
  props:{
    
  },
    
    components:{
  },

    methods:{
      paneAdder: function(i){
        this.$emit('addPanEvent');
      },
      
    }

}

</script>



<style>
#btn{
  margin-right:10px;
  float: right;
}
</style>