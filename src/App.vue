<template>
 <div class="main">
  <div class="top">
    <SearchBar/>
  </div>
  <div class="bottom" >
    <h3> showing search results for {{ searchOption.toUpperCase() }}...</h3>
  <imageBox/>
  
    <!-- <ImageCard :image_src="images[items].urls.full" :author="images[items].links.name" :location="images[items].description"/> -->
  </div>
 </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import SearchBar from "./components/SearchBar.vue"
import imageBox from "./components/image_box/imageBox.vue";
import { useImageStore } from "./store/store";

const unsplash = useImageStore()
const { query } = storeToRefs(unsplash)
let searchOption = query



</script>
