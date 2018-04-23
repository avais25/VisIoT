<template>

  <button></button>

</template>
 
<script>

// importing the components from widgets for gauge and line 

import plotlyGauge from './Widgets/Gauge'
import plotlyLine from './Widgets/Line'

 
export default {


	name: 'addPane',
  props:{
    		// no properties 
  },
    
    components:{
  },

    methods:{
      paneAdder: function(i){
        this.$emit('addPanEvent');  // function will execute when addPanEvent is fired...
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