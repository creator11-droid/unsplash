<template>
  <div class="grid_img">
          <loadingAnimation v-if="loading" v-for="n in 20" :key="n"/>
    

    <div v-else v-for="item in data">
<ImageCard :image_src="item.urls.full" :author="item.user.name" :location="item.user.location" :small="item.urls.small_s3" />

    </div>
  </div>
  
</template>
<script setup>
import ImageCard from '../image_card/ImageCard.vue';
import { useImageStore } from '@/store/store';
import { storeToRefs } from 'pinia';
import loadingAnimation from '../loadingAnimation/loadingAnimation.vue';


const unsplash = useImageStore();
// const { fetchData } = unsplash
// fetchData()
unsplash.setQuery()
const { data, loading } = storeToRefs(unsplash)



// let {data} = storeToRefs(unsplash)
// const { state } = findImage();

// watch(() => state.query, (oldValue, newValue) => {
//   console.log(`test: ${oldValue, newValue}`);
  
// }, {immediate: true} )
// setInterval(() => { console.log(state.query) }, 1000);






</script>
<style scoped>
@import "./css/index.css";
</style>