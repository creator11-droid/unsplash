
<template>
  <div v-if="show" class="modal_overlay" @click="emit('close')">
    <div class="modal_content" @click.stop>
     
      <slot></slot> <!-- Slot for dynamic content -->

     <button @click="emit('close')">
      <figure>
        <img :src="close"/>
      </figure>
     </button>
    </div> 
    
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
import close from "../../assets/images/icon.svg";

const props = defineProps(["show"]);
const emit = defineEmits(["close"]);
</script>


<style scoped>
@import "./css/index.css";
</style>