<script setup lang="ts">
import { ref, type Ref } from 'vue'

import img_cys from './assets/茶艺社.jpg'
import img_gdws from './assets/古典舞社.jpg'
import router from '@/router';
import TypeWriter from './../../../../conpoment/TypeWriter.vue';

function navCys() {
  router.push({path: "st/cys"})
}

function navGdws() {
  router.push({path: "st/gdws"})
}

</script>

<template>
  <main>
    <el-container>
      <el-main class="main">
        <el-space direction="vertical">
          <!-- <TypeWriter text="欢迎来到我们学校的社团活动板块！这里是一个充满活力、创意和激情的平台，汇聚了众多热爱生活、追求卓越的同学们。在这个板块里，你可以发现丰富多彩的社团活动，结交志同道合的朋友，共同探索兴趣爱好的无限可能。"/> -->
          <el-text size="large">欢迎来到我们学校的社团活动板块！这里是一个充满活力、创意和激情的平台，汇聚了众多热爱生活、追求卓越的同学们。在这个板块里，你可以发现丰富多彩的社团活动，结交志同道合的朋友，共同探索兴趣爱好的无限可能。</el-text>
          <!-- 卡片展示 -->
          <el-space wrap>
            <div class="stCard" @click="navCys">
              <el-image class="stCardImg" :src="img_cys" />
              <el-text class="stCardText">茶艺社</el-text>
            </div>
            <div class="stCard" @click="navGdws">
              <el-image class="stCardImg" :src="img_gdws" />
              <el-text class="stCardText">古典舞社</el-text>
            </div>
          </el-space>
        </el-space>

        <!-- <el-space direction="vertical">
          <el-button type="primary">Primary</el-button>
          <el-button type="primary">Primary</el-button>
          <el-button type="primary">Primary</el-button>
        </el-space> -->
      </el-main>
    </el-container>
  </main>
</template>

<style scoped>
.stCard {
  height: 220px;
  position: relative;
  box-shadow: var(--el-box-shadow-dark);
}
.stCardImg {
  border-radius: 4px;
  height: 100%;
}
.stCardText {
  
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  background: linear-gradient(to right, #c45656, #f0f9eb85);
  color: #337ecc;
  font-size: larger;
  bottom: 0px;
  left: 0%;
}
</style>
