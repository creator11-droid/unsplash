<template>
 <div class="main">
  <div class="top">
    <SearchBar/>
  </div>
  <div class="bottom" >
  <imageBox/>
  
    <!-- <ImageCard :image_src="images[items].urls.full" :author="images[items].links.name" :location="images[items].description"/> -->
  </div>
 </div>
</template>
<script setup>
import SearchBar from "./components/SearchBar.vue"
import imageBox from "./components/image_box/imageBox.vue";






</script>
