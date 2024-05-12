<script setup lang="ts">
import { ref, type Ref } from 'vue'

import img_cys from './assets/茶艺社.jpg'
import img_gdws from './assets/古典舞社.jpg'
import router from '@/router';

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
          <el-text size="large">欢迎来到我们学校的社团活动板块！这里是一个充满活力、创意和激情的平台，汇聚了众多热爱生活、追求卓越的同学们。在这个板块里，你可以发现丰富多彩的社团活动，结交志同道合的朋友，共同探索兴趣爱好的无限可能。</el-text>
          <!-- 卡片展示 -->
          <el-space wrap>
            <el-card class="stCard" @click="navCys">
              <el-image :src="img_cys" />
            </el-card>
            <el-card class="stCard" @click="navGdws">
              <el-image :src="img_gdws" />
            </el-card>
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
  
  height: 200px;
  width: 165px;
}
</style>
