<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
function clk() {
  console.log('click')

  window.open(
    'https://mp.weixin.qq.com/s?__biz=Mzg3Njg5ODE0Mg==&mid=2247495225&idx=2&sn=a4078846f0b2c3b30d3e567476e1b58e&chksm=ce78a45fabb831e8c4aa6ba8ab407a8531d1ddea45dc43b2c6f57d02981ae5b6d70a33666b40&xtrack=1&scene=0&subscene=267&sessionid=1715504626'
  )
}
</script>

<template>
  <main>
    <el-container>
      <el-main>
        <!-- 轮播图 -->
        <el-carousel class="carousel" indicator-position="none" motion-blur>
          <el-carousel-item class="carousel-item" :key="1">
            <div class="carousel-content">
              <el-text class="carousel-title"
                >五四精神传薪火，激扬青春献祖国---------我校开展五四文艺汇演活动</el-text
              >
              <img class="carousel-img" src="/static/assets/54主持人.jpg" alt="" @click="clk" />
            </div>
          </el-carousel-item>
          <el-carousel-item class="carousel-item" :key="2">
            <div class="carousel-content">
              <el-text class="carousel-title"
                >五四文艺汇演<span class="carousel-title-span">Golden Hour</span></el-text
              >
              <img class="carousel-img" src="/static/assets/goiden-hour.png" alt="" @click="clk" />
            </div>
          </el-carousel-item>
          <el-carousel-item class="carousel-item" :key="3">
            <div class="carousel-content">
              <el-text class="carousel-title"
                >五四文艺汇演<span class="carousel-title-span">年少有为</span></el-text
              >
              <img class="carousel-img" src="/static/assets/年少有为.png" alt="" @click="clk" />
            </div>
          </el-carousel-item>
          <el-carousel-item class="carousel-item" :key="4">
            <div class="carousel-content">
              <el-text class="carousel-title"
                >五四文艺汇演<span class="carousel-title-span">敦煌</span></el-text
              >
              <img class="carousel-img" src="/static/assets/敦煌.png" alt="" @click="clk" />
            </div>
          </el-carousel-item>
          <el-carousel-item class="carousel-item" :key="5">
            <div class="carousel-content">
              <el-text class="carousel-title"
                >五四文艺汇演<span class="carousel-title-span">逆光</span></el-text
              >
              <img class="carousel-img" src="/static/assets/逆光.png" alt="" @click="clk" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-main>
    </el-container>
  </main>
</template>

<style scoped>
.carousel {
}
.carousel-item {
  text-align: center;
}

.carousel-content {
  display: inline-block; /* 使carousel-content能水平居中 */
  vertical-align: middle; /* 使carousel-content能垂直居中 */
}
.carousel-img {
  height: 200px;
  object-fit: cover; /* 保证图片在元素内正确展示 */
}
.carousel-title {
  font-size: large;
}
.carousel-title-span {
  color: #337ecc;
  font-size: x-large;
}
</style>
