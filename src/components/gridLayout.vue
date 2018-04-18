<template>


  <div class="hello" >
   

     <!-- <div>
      <div class="layoutJSON">
        Displayed as <code>[x, y, w, h]</code>:
        <div class="columns">
          <div class="layoutItem" v-for="item in layout">
            <b>{{item.i}}</b>: [{{item.x}}, {{item.y}}, {{item.w}}, {{item.h}}]
          </div>
        </div>
      </div>
    </div> -->


    <!-- <div id="content">
      <input type="checkbox" v-model="draggable"/> Draggable
      <input type="checkbox" v-model="resizable"/> Resizable
      <br/>
      <div class="box"> -->
      <grid-layout :layout="layout"
                             :col-num="12"
                             :row-height="30"
                             :container-width="30"
                             :is-draggable="draggable"
                             :is-resizable="resizable"
                             :vertical-compact="true"
                             :use-css-transforms="true"
                             >
                             <grid-item style="background-color:grey" v-for="item in layout"
                                        :x="item.x"
                                        :y="item.y"
                                        :w="item.w"
                                        :h="item.h"
                                        :i="item.i"
                                        >
                                        <!-- <span class="text">{{item.i}}</span> -->


                                        <!-- <cGauge v-if="item.i==0"></cGauge>
 -->
                                        <widgetContainer v-on:deleteit="deleteItem($event)" v-bind:index="item.i" v-bind:ht="item.h*36" v-bind:wt="item.w*105" v-bind:nm="item.name" v-bind:type="item.type" v-bind:url="item.url" v-bind:keys="item.keys"></widgetContainer>

                             </grid-item>
      </grid-layout>
    </div>
    </div>

   
  </div>
</template>

<script>

import {GridLayout, GridItem} from 'vue-grid-layout';

import widgetContainer from './widgetContainer';

/*import cGauge from './echart';*/


/*var testLayout = [
  {"x":0,"y":0,"w":6,"h":15,"i":"0"},
  {"x":6,"y":0,"w":6,"h":15,"i":"1"},
  {"x":0,"y":1,"w":2,"h":5,"i":"2"},
  {"x":0,"y":2,"w":2,"h":3,"i":"3"},
  {"x":0,"y":3,"w":2,"h":3,"i":"4"},
  {"x":10,"y":0,"w":2,"h":3,"i":"5"},
  {"x":0,"y":5,"w":2,"h":5,"i":"6"},
  {"x":2,"y":5,"w":2,"h":5,"i":"7"},
  {"x":4,"y":5,"w":2,"h":5,"i":"8"},
  {"x":6,"y":4,"w":2,"h":4,"i":"9"},
  {"x":8,"y":4,"w":2,"h":4,"i":"10"},
  {"x":10,"y":4,"w":2,"h":4,"i":"11"},
  {"x":0,"y":10,"w":2,"h":5,"i":"12"},
  {"x":2,"y":10,"w":2,"h":5,"i":"13"},
  {"x":4,"y":8,"w":2,"h":4,"i":"14"},
  {"x":6,"y":8,"w":2,"h":4,"i":"15"},
  {"x":8,"y":10,"w":2,"h":5,"i":"16"},
  {"x":10,"y":4,"w":2,"h":2,"i":"17"},
  {"x":0,"y":9,"w":2,"h":3,"i":"18"},
  {"x":2,"y":6,"w":2,"h":2,"i":"19"}
];*/


export default {
  name: 'gridComp',
  components:  { GridLayout, GridItem ,widgetContainer},


  props: {
  testLayout: {
    type: Array,
    default: function () { return [
      /*{"x":0,"y":0,"w":6,"h":15,"i":"0","name":"gg"},
      {"x":6,"y":0,"w":6,"h":15,"i":"1","name":"gg"},*/] }
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

  // Helper for generating column width
  /*calcColWidth() {
      this.colWidth = (this.containerWidth - (this.margin[0] * (this.cols + 1))) / this.cols;
     // console.log("### COLS=" + this.cols + " COL WIDTH=" + colWidth + " MARGIN " + this.margin[0]);

      return this.colWidth;
  },*/

  
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
