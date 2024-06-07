<template>
    <div class="rounded-container" :style="containerStyle">
      <p>{{ text }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, computed } from 'vue';
  
  const props = defineProps<{
    backgroundImageUrl: string;
    text: string;
  }>();
  
  const containerStyle = computed(() => ({
    backgroundImage: `url(${props.backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    padding: '20px',
  }));
  </script>
  
  <style scoped>
  .rounded-container {
    width: 175px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    background-color: #000;
  }
  </style>