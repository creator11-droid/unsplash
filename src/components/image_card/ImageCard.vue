<template>
  <div class="image_card" @click="showModal=true">
    <img :src="image_src" loading="lazy" >
    <div class="desc">
     <h2> {{ author }}</h2> 
     <p>{{ location }}</p>
    </div>
    <modal :show="showModal" @close="showModal = false">
      <div class="hold">
        <figure>
          <img :src="image_src"> 
        </figure>
      
      <div class="details">
        <h2> {{ author }}</h2>
        <p>{{ location }}</p>
      </div>
      </div>

</modal>
  </div>
  
</template>
<script setup>
import modal from '../modal/modal.vue';
import { ref } from 'vue';

const showModal = ref(false);
defineProps({
  image_src: String,
  author: String,
  location: String
})
</script>
<style scoped>
@import"css/index.css";
</style>