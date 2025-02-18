<template>
  <div class="search_bar">
    <figure @click="setQ">
      <img :src="search" class="logs">
    </figure>
    
    <input placeholder="Search for photos" v-model="textInput" @keyup.enter="setQ"/>

  </div>
  
</template>
<script setup>
import search from "../assets/images/Search_Magnifying_Glass.svg"
import { ref } from "vue";
import { useImageStore } from "@/store/store";

const unsplash = useImageStore()

const textInput = ref('');

function setQ() {

  let param =textInput.value;
  
  unsplash.setQuery(param)
  textInput.value = '';
}


// let search_option= ref("")

// function handleEnter() {
//   console.log(search_option.value);
//   search_option.value = '';
  
// }
</script>