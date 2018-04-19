<template>
  <div v-bind:style="{ height: height + 'px'}" class="googlemap" :id="mapName"></div>
</template>
<script>
export default {
  name: 'googlemap',
 props:{
  name:{
    type:String,
    default:' '
  },
  //getting height and width of the grid item
    ht:{
      type:Number,
      default:'0'
    },
    wt:{
      type:Number,
      default:'0'
    },
         url: {
      type: String,
      default: ' '
    },
    keys: {
      type: Array,
      default: function () { return [] }
    },
    nm: {
      type: String,
      default: ' '
    }
  },

  data: function () {
    return {
      mapName: this.name + "-map",
      markerCoordinates: [{
        latitude: 19.1334,
        longitude: 72.9133
      }],
      map: null,
      bounds: null,
      markers: [],
      height:this.ht,
      width:this.wt,

    }
  },

  mounted: function () {
    this.bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapName)
    const mapCentre = this.markerCoordinates[0]
    const options = {
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
    }
    this.map = new google.maps.Map(element, options);
    this.markerCoordinates.forEach((coord) => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({ 
        position,
        map: this.map
      });
    this.markers.push(marker)
      this.map.fitBounds(this.bounds.extend(position))
    });
  }
};
</script>
<style scoped>
.googlemap {
 
  margin: 0 auto;
  background: gray;
}
</style>