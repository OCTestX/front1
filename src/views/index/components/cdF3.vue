<template>
    <div class="carousel">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-item" v-for="(image, index) in images" :key="index">
          <img :src="image" alt="carousel image" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const props = defineProps<{
    images: string[];
  }>();
  
  const currentIndex = ref(0);
  let intervalId: number | null = null;
  
  const startCarousel = () => {
    intervalId = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % props.images.length;
    }, 3000);
  };
  
  onMounted(() => {
    startCarousel();
  });
  
  onUnmounted(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  });
  </script>
  
  <style scoped>
  .carousel {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .carousel-inner {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-item {
    min-width: 100%;
    box-sizing: border-box;
  }
  
  .carousel-item img {
    width: 100%;
    height: auto;
    display: block;
  }
  </style>