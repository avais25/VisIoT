<template>
<div id="add_widget">
    
      <md-button class="md-raised md-primary " id="dsButton" v-on:click="show" type="button">
          <span id="button_add_datasource">ADD DATASOURCE</span>
      </md-button>
      <!-- <button v-on:click="show" type="button">Add Datasource</button>
     -->

  
  <!-- 
  using Vue-Modal to create a dialogue box which pop ups
  -->
    <modal name="add-datasource" @before-open="beforeOpen">
      <div id="modal_box" style="padding-right: 50px;padding-top: 50px; ">
        <form style="height: 300px;">
            <label>Name:</label>
            <input v-model="name"  type="text" name="name" required><br>
            <label>URL</label> 
             <input v-model="url"type="text" name="url" required>
            <br>
            <!-- <input v-model="url"  v-on:click="onSubmit" type="submit" name="submit" > -->
            <button style="margin-left: 300px;margin-top: 50px;  "  id="addWidget_button" v-on:click="onSubmit" type="button">Submit
            </button>
        </form>
      </div>
    </modal>
</div>
</template>


<script>

//import vmodal from 'vue-js-modal' 
export default {


	name: 'addDatasource',

  props:{
   
    index: {
      type: String,
      default: '10'
      /*default:'Foobar'*/
    }
  },

  data() {
  return{
    
    url: '',
    name: '',
    arr:
    {
      "name":this.name,
      "url":this.url
    },

}
},

    components:{
  },

    methods: {
  show () {
    this.$modal.show('add-datasource');  // Method to show the pop up dialogue box
  },
  hide () {
    this.$modal.hide('add-datasource');  // Method to hide the pop up dialogue box
  },
  beforeOpen (event) {
    //console.log(event.params.foo);
    console.log("beforeOpen function executed");  // Method execute before pop up dialogue box
  },


// This method will execute when user hit submit button.
  onSubmit(){
    this.hide();
    //assign name and url to the array
    this.arr.name=this.name;
    this.arr.url=this.url;
    this.$emit('onSubmit',this.arr);

    console.log("Name inside addDatasource:"+this.name);

  }
}


   }


</script>


<!-- Styles for the ADD DATASOURCE button and submit button -->

<style>
#btn{
  margin-right:10px;
  float: right;
}

/*button{
  
    background: rgba(0,200,0,.7);
    padding: 10px;
    font-family:tahoma;
    font-weight: bold;
    font-size: 16px;
    border-radius: 5px;

}*/

#dsButton{
 width: 200px;
 background: rgba(0,200,0,.9);
 float: left;

}
#datasource_button{
  margin: 0px 100px 0px 100px;
}

/*#button_add_datasource{
  color: blue;
}*/
</style>