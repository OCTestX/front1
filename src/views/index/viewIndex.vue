<script setup lang="ts">
import { ref, type Ref } from 'vue'


</script>

<template>
  <main class="main">
    <el-space direction="vertical">
      
    </el-space>
  </main>
</template>

<style scoped>
.el-image.titleImg {
  height: 100px;
}
.el-menu.nav {
  flex: 1;
}
.anim1 {
  animation: fadeInDown2 0.5s both;
}
/* 定义淡入效果 */
@keyframes fadeInDown2 {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
mapmap
