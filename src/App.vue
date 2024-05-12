<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <el-container>
    <el-main>
      <RouterView class="anim1"/>
    </el-main>
    <el-footer>
      备案信息: xxxxxxxx
      <p> 版权所有©潮州暨实高级中学</p>
    </el-footer>
  </el-container>
</template>

<style scoped>
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
