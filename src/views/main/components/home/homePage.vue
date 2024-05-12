<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <main>
    <el-container>
      <el-main>
        <!-- 轮播图 -->
        <el-carousel height="200px" motion-blur>
          <el-carousel-item :key="1"> 
            <img src="/public/static/assets/爵士舞社.jpg" alt="">
          </el-carousel-item>
          <el-carousel-item :key="2"> 
            <img src="/public/static/assets/Fearless漫研社.jpg" alt="">
           </el-carousel-item>
          <el-carousel-item :key="3"> 
            <img src="/public/static/assets/KPOP.jpg" alt="">
          </el-carousel-item>
          <el-carousel-item :key="4">
            <img src="/public/static/assets/志愿者.jpg" alt="">
          </el-carousel-item>
          <el-carousel-item :key="5"> 
            <img src="/public/static/assets/模型社.jpg" alt="">
          </el-carousel-item>
          <el-carousel-item :key="6"> 
            <img src="/public/static/assets/音乐社.jpg" alt="">
          </el-carousel-item>
        </el-carousel>
      </el-main>
    </el-container>
  </main>
</template>

<style></style>
