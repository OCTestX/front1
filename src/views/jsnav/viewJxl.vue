<script setup lang="ts">
import { ref, type Ref } from 'vue'
</script>

<template>
  <main class="main">
    <el-space direction="vertical">
      <div class="navMain">
        <img class="mainImg" src="/static/assets/js-bird-look.jpg" alt="" />
        <div class="actionDiv">
          <el-button type="primary" class="jxl">教学楼</el-button>
          
        </div>
      </div>
      <div class="content">
        <img class="background1" src="/static/assets/school1.jpeg" alt="" />
      </div>
    </el-space>
  </main>
</template>

<style scoped>
.navMain {
  position: relative;
  z-index: 1; /* 设置较低的z-index值 */
}

.jxl {
  position: absolute; /* 使按钮相对于父元素定位 */
  top: 82%; /* 根据需要调整位置 */
  left: 25%; /* 根据需要调整位置 */
}
.lt {
  position: absolute; /* 使按钮相对于父元素定位 */
  top: 40%; /* 根据需要调整位置 */
  left: 20%; /* 根据需要调整位置 */
}
.st {
  position: absolute; /* 使按钮相对于父元素定位 */
  top: 10%; /* 根据需要调整位置 */
  left: 50%; /* 根据需要调整位置 */
}
.ssl-man {
  position: absolute; /* 使按钮相对于父元素定位 */
  top: 10%; /* 根据需要调整位置 */
  left: 25%; /* 根据需要调整位置 */
}
.ssl-woman {
  position: absolute; /* 使按钮相对于父元素定位 */
  top: 15%; /* 根据需要调整位置 */
  left: 73%; /* 根据需要调整位置 */
}
.cs {
  position: absolute; /* 使按钮相对于父元素定位 */
  top: 50%; /* 根据需要调整位置 */
  left: 68%; /* 根据需要调整位置 */
}

.mainImg {
  position: relative;
  width: 100%;
}
.content {
  position: relative;
  width: 100%;
}
.background1 {
  width: 100%;
  padding-top: 10%;
}

.text-1 {
  font-size: xxx-large;
  position: absolute;
  top: 0%;
  left: 25%;
  padding-left: 5px;
  padding-right: 5px;
  box-shadow: 12px 12px 5px rgba(0, 0, 0, 0.3);
  border: 2px solid black;
  text-shadow:
    1px 1px var(--el-color-danger-dark-2),
    2px 2px var(--el-color-danger-dark-2),
    3px 3px var(--el-color-danger-dark-2),
    4px 4px var(--el-color-danger-dark-2),
    5px 5px var(--el-color-danger-dark-2);
}
.baidubaike {
  font-size: x-large;
}
</style>
