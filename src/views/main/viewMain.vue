<script setup lang="ts">
import { ref, type Ref } from 'vue'
import home from './components/home/homePage.vue'
import stActivitys from './components/stactivity/stActivitys.vue'
import type { TabsPaneContext } from 'element-plus';
import homeImg from './assets/title.png'

//默认选中的菜单索引
const activeName: Ref<string| number | undefined> = ref('home')

//选中菜单触发的回调
const handleClick = (tab: TabsPaneContext, event: Event) => {
  activeName.value = tab.paneName
  console.log(activeName.value)
  
}
function getBananelImg(): string {
  if (activeName.value =="home") return homeImg
  else if (activeName.value == "st") return homeImg
  else if (activeName.value == "news") return homeImg
  else if (activeName.value == "jscolors") return homeImg
  return homeImg
}

const bannalImgUrl = ref(getBananelImg())
</script>

<template>
  <main class="main">
    <el-space direction="vertical">
      <el-image class="titleImg" :src="bannalImgUrl" fit = "scale-down" />
    <!-- <el-menu :default-active="activeIndex" class="nav" mode="horizontal" @select="handleSelect">
      <el-menu-item index="home">首页</el-menu-item>
      <el-menu-item index="st">社团</el-menu-item>
      <el-menu-item index="news">新闻中心</el-menu-item>
      <el-menu-item index="jscolors">暨实风采</el-menu-item>
    </el-menu> -->
    </el-space>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="首页" name="home">
        <home class="anim1"/>
      </el-tab-pane>
      <el-tab-pane label="社团活动" name="st">
        <stActivitys class="anim1" />
      </el-tab-pane>
      <el-tab-pane label="新闻中心" name="news">Role</el-tab-pane>
      <el-tab-pane label="暨实风采" name="jscolors">Task</el-tab-pane>
    </el-tabs>
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
