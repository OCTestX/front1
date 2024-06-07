<script setup lang="ts">
import { ref, type Ref } from 'vue'
import cdf from "./components/cdF3.vue"
import { serverStaticAssetsAddress } from "@/Conf"
import NewItem from "./components/NewsItem.vue"

const imageUrls = [
  serverStaticAssetsAddress+"img.png",
  serverStaticAssetsAddress+"img.png",
  serverStaticAssetsAddress+"img.png",
];

</script>

<template>
  <main class="main">
    <el-space direction="vertical" style="width: 100%;">
      <cdf :images="imageUrls"/>
      <img src="./assets/title.png" class="title"/>
      <h1 class="tag">暨实 · 资讯</h1>

      <el-space warp style="width: 100%;">
        <NewItem :background-image-url="serverStaticAssetsAddress+'img.png'" text=""/>
        <NewItem :background-image-url="serverStaticAssetsAddress+'img.png'" text=""/>
        <NewItem :background-image-url="serverStaticAssetsAddress+'img.png'" text=""/>
        <NewItem :background-image-url="serverStaticAssetsAddress+'img.png'" text=""/>
      </el-space>
    </el-space>
  </main>
</template>

<style scoped>
.title {
  width: 300px;
  position: absolute;
  top: 0px;
  left: 10px;
}
.tag {
  font-weight: bold;
  font-size: xx-large;
}
</style>