<template>
    <div class="rounded-container">
      <div class="bg" :style="bgStyle"/>
      <p class="title">{{ text }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, computed } from 'vue';
  
  const props = defineProps<{
    backgroundImageUrl: string;
    text: string;
  }>();
  const bgStyle = computed(() => ({
    backgroundImage: `url(${props.backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
  }));
  </script>
  
  <style scoped>
  .rounded-container {
    position: relative;
    width: 175px;
    height: 75px;
  }
  .bg {
    width: 175px;
    height: 75px;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: 0%;
    left: 6%;
  }
  </style>