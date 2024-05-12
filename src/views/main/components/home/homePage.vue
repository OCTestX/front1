<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
</script>

<template>
  <main>
    <el-container>
      <el-main>
        <!-- 轮播图 -->
        <h1>五四精神传薪火，激扬青春献祖国---------我校开展五四文艺汇演活动</h1>
          <el-carousel height="200px" motion-blur>
          <el-carousel-item :key="1"> 
            <img src="/public/static/54主持人.jpg" style="width:100%;" alt="">
          </el-carousel-item>
          <el-carousel-item :key="2"> 
            <img src="/public/static/goiden-hour.png" style="width:100%;" alt="">
           </el-carousel-item>
          <el-carousel-item :key="3"> 
            <img src="/public/static/年少有为.png" style="width:100%;" alt="">
          </el-carousel-item>
          <el-carousel-item :key="4">
            <img src="/public/static/敦煌.png" style="width:100%;" alt="">
          </el-carousel-item>
          <el-carousel-item :key="5"> 
            <img src="/public/static/逆光.png"  style="width:100%;" alt="">
          </el-carousel-item>
          <el-carousel-item :key="6"> 
            <img src="/public/static/54主持人.jpg" style="width:100%;" alt="">
          </el-carousel-item>
        </el-carousel>
      </el-main>
    </el-container>
  </main>
</template>

<style></style>
