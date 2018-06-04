<template>


  <div class="hello" >

  <!-- Setting the grid for number of grid items -->

      <grid-layout :layout="layout"
                             :col-num="12"
                             :row-height="30"
                             :container-width="30"
                             :is-draggable="draggable"
                             :is-resizable="resizable"
                             :vertical-compact="true"
                             :use-css-transforms="true"
                             >

                             <!-- Grid Item have below properties like color grey --> 

                             <grid-item style="background-color:grey" v-for="item in layout"
                                        :x="item.x"
                                        :y="item.y"
                                        :w="item.w"
                                        :h="item.h"
                                        :i="item.i"
                                        >

                                        <!-- calling the component of widgetContainer class -->

                                        <widgetContainer v-on:deleteit="deleteItem($event)" v-bind:index="item.i" v-bind:ht="item.h*32" v-bind:wt="item.w*135" v-bind:nm="item.name" v-bind:type="item.type" v-bind:url="item.url" v-bind:keys="item.keys"></widgetContainer>

                             </grid-item>
      </grid-layout>
    </div>
    </div>

   
  </div>
</template>

<script>

// importing components of vue-grid-layout and widgetContainer

import {GridLayout, GridItem} from 'vue-grid-layout';

import widgetContainer from './widgetContainer';



export default {
  name: 'gridComp',
  components:  { GridLayout, GridItem ,widgetContainer},


  props: {
  testLayout: {
    type: Array,
    default: function () { return [] }
  },


},

  data () {
    return {
      layout: this.testLayout,
      resizable: true,
      draggable: true,
      index: 0,
      //colWidth: 0
    }
  },

  methods: {
  show () {
    this.$modal.show('add-widget');
  },

// method to delete a widget

  deleteItem(item){
    console.log("Item to be deletet in GridLayout:"+item);

    for (var i = 0; i < this.testLayout.length; i++) {
      if(this.testLayout[i].i == item)
      {
        console.log("Inside if of delete");
        this.testLayout.splice(i,1);
      }
    }

  },

  
}


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
